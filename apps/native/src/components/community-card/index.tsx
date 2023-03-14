import { StyleProp, ViewStyle } from 'react-native'

import * as Styled from './styled'

export interface CommunityCardProps {
  imageSrc: string
  onShareClick?: VoidFunction
  style?: StyleProp<ViewStyle>
  title: string
}

function CommunityCard({
  imageSrc,
  onShareClick,
  style,
  title,
}: CommunityCardProps) {
  return (
    <Styled.Article style={[style, { borderRadius: 8 }]}>
      <Styled.Figure>
        <Styled.Image source={{ uri: imageSrc }} />
        <Styled.ShareButton
          iconName="share"
          onClick={onShareClick}
          scale={0.8}
          style={{ borderRadius: 16 }}
        />
      </Styled.Figure>
      <Styled.Title numberOfLines={2}>{title}</Styled.Title>
    </Styled.Article>
  )
}

export default CommunityCard
