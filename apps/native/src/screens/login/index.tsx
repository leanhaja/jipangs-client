import Logo from '../../../assets/images/logo.png'
import LogoText from '../../../assets/svgs/logo-text.svg'
import LoginButton from '../../features/login/components/Button'
import type { RootScreenProps } from '../../types/navigation'

import * as Styled from './styled'

export default function LoginScreen({ navigation }: RootScreenProps<'Login'>) {
  const handleLoginPress = () => navigation.navigate('LoginWebView')

  return (
    <Styled.Screen>
      <LogoText />
      <Styled.GapMedium />
      <Styled.Text>
        <Styled.Bold>보건의료</Styled.Bold> 대학생을 위한{'\n'}
        <Styled.Bold>대외활동 및 봉사활동 </Styled.Bold>
        큐레이션 서비스
      </Styled.Text>
      <Styled.GapNarrow />
      <Styled.Logo source={Logo} />
      <Styled.GapWide />
      <LoginButton oauthProvider="kakao" onPress={handleLoginPress} />
    </Styled.Screen>
  )
}
