import { useState } from 'react'

import * as Styled from './styled'

import IconButton from '@/components/icon-button'

export interface CardProps {
  imageSrc: string
  location?: string
  onScrapClick?: VoidFunction
  tags?: string[]
  title: string
}

function Card({ imageSrc, location, onScrapClick, tags, title }: CardProps) {
  const [isBookMarked, setIsBookMarked] = useState(false)

  const onClick = () => {
    setIsBookMarked((prevIsBookMarked) => !prevIsBookMarked)
    onScrapClick?.()
  }

  const isFooterExisting = location && onScrapClick

  return (
    <Styled.Article>
      <Styled.Figure>
        <Styled.Image alt={title} src={imageSrc} />
        <Styled.Share ariaLabel="공유하기" iconName="share" />
        {tags && (
          <Styled.TagList>
            {tags.map((tag, index) => (
              <Styled.Tag key={`${tag}-${index + 1}`}>{tag}</Styled.Tag>
            ))}
          </Styled.TagList>
        )}
      </Styled.Figure>
      <Styled.Title>
        <strong>{title}</strong>
      </Styled.Title>
      {isFooterExisting && (
        <Styled.Footer>
          <span>{location}</span>
          <IconButton
            ariaLabel="스크랩"
            iconName={isBookMarked ? 'bookmark_colored' : 'bookmark'}
            onClick={onClick}
          />
        </Styled.Footer>
      )}
    </Styled.Article>
  )
}

export default Card

// TODO: 하단 이모티콘 수정
// TODO: 하단 상단 버튼 스타일 수정
