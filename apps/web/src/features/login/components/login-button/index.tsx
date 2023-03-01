import * as Styled from './styled'
import type { StyleProps } from './styled'

import Icon from '@/components/icon'

interface LoginButtonProps extends StyleProps {
  onClick: () => void
}

export default function LoginButton({
  oauthProvider,
  onClick,
}: LoginButtonProps) {
  return (
    <Styled.Button oauthProvider={oauthProvider} onClick={onClick}>
      <Icon iconName={oauthProvider} />
      <Styled.Text>카카오로 계속하기</Styled.Text>
    </Styled.Button>
  )
}
