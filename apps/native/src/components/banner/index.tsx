import { StyleProp, ViewStyle } from 'react-native'

import * as Styled from './styled'

export interface BannerProps {
  containerStyle?: StyleProp<ViewStyle>
  size?: 'big' | 'small'
  subTitle?: string
  tag?: string
  title: string
}

function Banner({
  containerStyle,
  size = 'big',
  subTitle,
  tag,
  title,
}: BannerProps) {
  return (
    <Styled.Container size={size} style={containerStyle}>
      {!!subTitle && <Styled.SubTitle>{subTitle}</Styled.SubTitle>}
      {!!tag && (
        <Styled.TagWrapper>
          <Styled.Tag style={{ borderRadius: 12 }}>{tag}</Styled.Tag>
        </Styled.TagWrapper>
      )}
      <Styled.Title size={size}>{title}</Styled.Title>
    </Styled.Container>
  )
}

export default Banner
