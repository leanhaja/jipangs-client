import { useState } from 'react'

import * as Styled from './styled'

import IconButton from '@/components/icon-button'

export interface CardProps {
  imageSrc: string
  location: string
  onScrapClick?: VoidFunction
  onShareClick?: VoidFunction
  size?: 'big' | 'small'
  tags: [leftTagName: string, rightTagName: string]
  title: string
}

function Card({
  imageSrc,
  location,
  onScrapClick,
  onShareClick,
  size = 'big',
  tags,
  title,
}: CardProps) {
  const [isBookMarked, setIsBookMarked] = useState(false)

  const onClick = () => {
    setIsBookMarked((prevIsBookMarked) => !prevIsBookMarked)
    onScrapClick?.()
  }

  return (
    <Styled.Article className={size}>
      <Styled.Figure>
        <Styled.Image alt={title} src={imageSrc} />
        <Styled.ShareButton
          ariaLabel="공유하기"
          iconName="share"
          onClick={onShareClick}
        />
        <Styled.TagList>
          {tags.map((tag, index) => (
            <Styled.Tag key={`${tag}-${index + 1}`}>{tag}</Styled.Tag>
          ))}
        </Styled.TagList>
      </Styled.Figure>
      <Styled.Title>
        <strong>{title}</strong>
      </Styled.Title>
      <Styled.Footer>
        <span>{location}</span>
        <IconButton
          ariaLabel="스크랩"
          iconName={isBookMarked ? 'bookmark_filled' : 'bookmark'}
          onClick={onClick}
        />
      </Styled.Footer>
    </Styled.Article>
  )
}

export default Card
