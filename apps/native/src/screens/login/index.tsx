import Logo from '../../../assets/images/logo.png'
import LogoText from '../../../assets/images/textLogo.png'
import LoginButton from '../../features/login/components/Button'
import type { RootScreenProps } from '../../types/navigation'

import * as Styled from './styled'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export default function LoginScreen({ navigation }: RootScreenProps<'Login'>) {
  const handleLoginPress = () => navigation.navigate('LoginWebView')

  return (
    <Styled.Screen>
      <Styled.LogoText
        contentFit="cover"
        placeholder={blurhash}
        source={LogoText}
      />
      <Styled.GapNarrow />
      <Styled.Logo contentFit="cover" placeholder={blurhash} source={Logo} />
      <Styled.GapWide />
      <Styled.ButtonContainer>
        <LoginButton oauthProvider="kakao" onPress={handleLoginPress} />
      </Styled.ButtonContainer>
    </Styled.Screen>
  )
}
