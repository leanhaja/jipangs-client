import * as Styled from './styled'

export interface CardProps {
  imageSrc: string
  onShareClick?: VoidFunction
  title: string
}

function CommunityCard({ imageSrc, onShareClick, title }: CardProps) {
  return (
    <Styled.Article>
      <Styled.Figure>
        <Styled.Image alt={title} src={imageSrc} />
        <Styled.ShareButton
          ariaLabel="공유하기"
          iconName="share"
          onClick={onShareClick}
        />
      </Styled.Figure>
      <Styled.Title>
        <strong>{title}</strong>
      </Styled.Title>
    </Styled.Article>
  )
}

export default CommunityCard
