import { IconButtonProps } from '../../../../components/icon-button'
import theme from '../../../../styles/theme'

import * as Styled from './styled'

export interface EmptyProps {
  iconName: IconButtonProps['iconName']
  message: string
}

function Empty({ iconName, message }: EmptyProps) {
  return (
    <Styled.Container>
      <Styled.EmptyIcon iconColor={theme.colors.GREY2} iconName={iconName} />
      <Styled.EmptyMessage>{message}</Styled.EmptyMessage>
    </Styled.Container>
  )
}

export default Empty
