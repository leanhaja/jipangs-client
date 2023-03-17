import { StyleProp, TextStyle } from 'react-native'

import * as Styled from './styled'

export interface TitleProps {
  style?: StyleProp<TextStyle>
  title: string
}

function Title({ style, title }: TitleProps) {
  return <Styled.Title style={style}>{title}</Styled.Title>
}

export default Title
