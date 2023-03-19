import { useState } from 'react'
import {
  LayoutChangeEvent,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'

import Card, { CardProps } from '../../../../components/card'

export interface LinkCardProps extends CardProps {
  link: string
}

export interface CardGridProps {
  contentContainerStyle?: StyleProp<ViewStyle>
  items: LinkCardProps[]
  onCardClick?: (link: string, title: string) => void
}

function CardGrid({
  contentContainerStyle,
  items: cards,
  onCardClick,
}: CardGridProps) {
  const [innerWidth, setInnerWidth] = useState(0)

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout

    setInnerWidth(width)
  }

  const width = (innerWidth - 9) / 2

  return (
    <View
      style={[
        contentContainerStyle,
        {
          alignItems: 'flex-start',
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        },
      ]}
      onLayout={onLayout}
    >
      {cards.map(
        (
          {
            imageSrc,
            isBookMarked,
            link,
            location,
            onScrapClick,
            onShareClick,
            tags,
            title,
          },
          index
        ) => (
          <Pressable
            key={`card-item-${index + 1}`}
            onPress={() => {
              onCardClick?.(link, title)
            }}
          >
            <Card
              style={{
                marginBottom: 25,
                marginRight: index % 2 ? 0 : 9,
                width,
              }}
              imageSrc={imageSrc}
              isBookMarked={isBookMarked}
              location={location}
              onScrapClick={onScrapClick}
              onShareClick={onShareClick}
              size="small"
              tags={tags}
              title={title}
            />
          </Pressable>
        )
      )}
    </View>
  )
}

export default CardGrid
