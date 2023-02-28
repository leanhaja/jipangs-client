import * as Styled from './styled'

import LoginButton from '@/features/login/components/login-button'

export default function LoginPage() {
  return (
    <Styled.Container>
      <Styled.TextLogo src="/images/textLogo.png" />
      <Styled.ImageLogo src="/images/logo.png" />
      <LoginButton OAuthProvider="kakao" onClick={() => {}} />
      <LoginButton OAuthProvider="apple" onClick={() => {}} />
    </Styled.Container>
  )
}
