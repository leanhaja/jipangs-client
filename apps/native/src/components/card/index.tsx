import { useState } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import theme from '../../styles/theme'
import IconButton from '../icon-button'

import * as Styled from './styled'

export interface CardProps {
  imageSrc: string
  isBookMarked?: boolean
  location: string
  onScrapClick?: VoidFunction
  onShareClick?: VoidFunction
  size?: 'big' | 'small'
  style?: StyleProp<ViewStyle>
  tags: [leftTagName: string, rightTagName: string]
  title: string
}

const DEFAULT =
  'https://jipangs-backend.s3.ap-northeast-2.amazonaws.com/test/f3c6fb2d-2ce1-4535-9245-5ef5051d47fcno-image-icon-6.png'
const { colors } = theme

function Card({
  imageSrc,
  isBookMarked: initialIsBookMarked = false,
  location,
  onScrapClick,
  onShareClick,
  size = 'big',
  style,
  tags,
  title,
}: CardProps) {
  const [isBookMarked, setIsBookMarked] = useState(initialIsBookMarked)
  const bigSize = size === 'big'

  const onClick = () => {
    setIsBookMarked((prevIsBookMarked) => !prevIsBookMarked)
    onScrapClick?.()
  }

  return (
    <Styled.Article style={[style, { borderRadius: bigSize ? 8 : 4 }]}>
      <Styled.Figure bigSize={bigSize}>
        <Styled.Image
          source={
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            imageSrc === DEFAULT
              ? // eslint-disable-next-line global-require
                require('../../../assets/images/default_card.png')
              : { uri: imageSrc }
          }
          style={{ borderRadius: bigSize ? 8 : 4 }}
        />
        <Styled.ShareButton
          bigSize={bigSize}
          iconName="share"
          onClick={onShareClick}
          scale={bigSize ? undefined : 0.8}
          style={{ borderRadius: bigSize ? 20 : 16 }}
        />
        <Styled.TagList bigSize={bigSize}>
          {tags.map((tag, index) => {
            const isLefTag = index === 0
            const margin = bigSize ? 12 : 8
            return (
              <Styled.Tag
                key={`tag-${index + 1}`}
                style={{
                  backgroundColor: isLefTag
                    ? colors.CONTAINER_RED
                    : colors.TRANSPARENT_GRAY,
                  borderRadius: 10,
                  marginLeft: isLefTag ? margin : undefined,
                  marginRight: !isLefTag ? margin : undefined,
                }}
                bigSize={bigSize}
              >
                {tag}
              </Styled.Tag>
            )
          })}
        </Styled.TagList>
      </Styled.Figure>
      <Styled.Title bigSize={bigSize} numberOfLines={2}>
        {title}
      </Styled.Title>
      <Styled.Footer bigSize={bigSize}>
        <Styled.Location bigSize={bigSize}>{location}</Styled.Location>
        <IconButton
          iconColor={colors.BOOKMARK_PURPLE}
          iconName={isBookMarked ? 'bookmark_filled' : 'bookmark'}
          onClick={onClick}
          scale={bigSize ? undefined : 0.9}
        />
      </Styled.Footer>
    </Styled.Article>
  )
}

export default Card
