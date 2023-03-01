import Image from 'next/image'

import * as Styled from './styled'

import LoginButton from '@/features/login/components/login-button'

export default function LoginPage() {
  return (
    <Styled.Container>
      <Styled.TextLogoWrapper>
        <Image alt="logo" fill src="/images/textLogo.png" />
      </Styled.TextLogoWrapper>
      <Styled.ImageLogoWrapper>
        <Image alt="text logo" fill src="/images/logo.png" />
      </Styled.ImageLogoWrapper>
      <LoginButton oauthProvider="kakao" onClick={() => {}} />
      <LoginButton oauthProvider="apple" onClick={() => {}} />
    </Styled.Container>
  )
}
