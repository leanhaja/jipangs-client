import { Pressable, StyleProp, ViewStyle } from 'react-native'

import Card, { CardProps } from '../../../../components/card'
import Carousel from '../../../../components/carousel'

export interface LinkCardProps extends CardProps {
  link: string
}

export interface CardCarouselProps {
  cardOffset?: number
  cardWidth: number
  containerStyle?: StyleProp<ViewStyle>
  items: LinkCardProps[]
  onCardClick?: (link: string, title: string) => void
}

function CardCarousel({
  cardOffset = 0,
  cardWidth,
  containerStyle,
  items: cards,
  onCardClick,
}: CardCarouselProps) {
  return (
    <Carousel
      renderItem={({
        index,
        item: {
          imageSrc,
          isBookMarked,
          link,
          location,
          onScrapClick,
          onShareClick,
          tags,
          title,
        },
      }) => (
        <Pressable
          onPress={() => {
            onCardClick?.(link, title)
          }}
        >
          <Card
            style={{
              marginRight: index + 1 === cards.length ? undefined : cardOffset,
              width: cardWidth,
            }}
            imageSrc={imageSrc}
            isBookMarked={isBookMarked}
            location={location}
            onScrapClick={onScrapClick}
            onShareClick={onShareClick}
            tags={tags}
            title={title}
          />
        </Pressable>
      )}
      contentContainerStyle={containerStyle}
      gap={cardOffset}
      slideWidth={cardWidth}
      slides={cards}
    />
  )
}

export default CardCarousel
