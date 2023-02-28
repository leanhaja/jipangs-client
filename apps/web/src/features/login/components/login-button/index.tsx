import * as Styled from './styled'
import type { StyleProps } from './styled'

import Icon from '@/components/icon'

interface LoginButtonProps extends StyleProps {
  onClick: () => void
}

export default function LoginButton({
  OAuthProvider,
  onClick,
}: LoginButtonProps) {
  return (
    <Styled.Button OAuthProvider={OAuthProvider} onClick={onClick}>
      <Icon iconName={OAuthProvider} />
      <Styled.Text>카카오로 계속하기</Styled.Text>
    </Styled.Button>
  )
}
