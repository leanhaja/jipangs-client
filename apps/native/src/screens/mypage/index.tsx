import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useQuery } from '@tanstack/react-query'

import Card from '../../features/mypage/components/Card'
import CategoryButton from '../../features/mypage/components/CategoryButton'
import Divider from '../../features/mypage/components/Divider'
import { queryKeys } from '../../react-query/constants'
import jipangs from '../../service/jipangs'
import theme from '../../styles/theme'
import { MainTabParamList, RootStackParamList } from '../../types'
import { transformPixelToDp } from '../../utils'

import * as Styled from './styled'

type MypageScreenProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Mypage'>,
  NativeStackScreenProps<RootStackParamList>
>

const getUserInfo = async () => {
  const { data } = await jipangs.getUserInfo()
  return data
}

const bottomMargin = transformPixelToDp(theme.bottomNavigationHeight)

export default function MypageScreen({ navigation }: MypageScreenProps) {
  const { data } = useQuery([queryKeys.userInfo], getUserInfo)

  const handleTermOfUseButton = () =>
    navigation.navigate('ExternalLink', {
      link: 'https://twilight-snow-7e6.notion.site/05409d44c8244908a754967f443c3b8a',
      title: '이용약관 동의',
    })
  const handlePressPrivacyPolicyButton = () =>
    navigation.navigate('ExternalLink', {
      link: 'https://twilight-snow-7e6.notion.site/05409d44c8244908a754967f443c3b8a',
      title: '이용약관 동의',
    })

  return (
    <Styled.Screen style={{ marginBottom: bottomMargin }}>
      <Styled.CardWrapper>
        <Card
          grade={data?.body.user.grade}
          hasInterestedRigion
          major={data?.body.user.grade}
          name={data?.body.user.name}
          university={data?.body.user.university}
        />
      </Styled.CardWrapper>
      <Divider />
      <CategoryButton
        onPress={() => {
          navigation.navigate('Setting', { screen: 'MyInfo' })
        }}
      >
        내 정보
      </CategoryButton>
      <CategoryButton
        onPress={() => {
          navigation.navigate('Setting', { screen: 'LoginInfo' })
        }}
      >
        로그인 정보
      </CategoryButton>
      <CategoryButton
        onPress={() => {
          navigation.navigate('Setting', { screen: 'InfoAgreementSetting' })
        }}
      >
        정보 동의 설정
      </CategoryButton>
      <Divider />
      <CategoryButton onPress={handleTermOfUseButton}>이용약관</CategoryButton>
      <CategoryButton onPress={handlePressPrivacyPolicyButton}>
        개인정보 처리방침
      </CategoryButton>
      <Divider />
      <CategoryButton onPress={() => {}}>문의하기</CategoryButton>
      <CategoryButton onPress={() => {}}>공지사항</CategoryButton>
    </Styled.Screen>
  )
}
