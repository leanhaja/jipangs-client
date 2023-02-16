import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import * as Styled from './styled'

interface NoticeCardProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  date: Date
  description: string
  image?: string
  isNotChecked?: boolean
  title: string
}

export default function NoticeCard({
  date,
  description,
  image,
  isNotChecked,
  onClick,
  title,
}: NoticeCardProps) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
    month: 'numeric',
  })
    .format(date)
    .replace(',', '')

  return (
    <Styled.Button isNotChecked={isNotChecked} onClick={onClick} type="button">
      {isNotChecked && <Styled.RedDot />}
      <Styled.ProfileImage src={image} />
      <Styled.ContentContainer>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        <Styled.Date>{formattedDate}</Styled.Date>
      </Styled.ContentContainer>
    </Styled.Button>
  )
}
