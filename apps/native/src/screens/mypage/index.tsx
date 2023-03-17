import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import Card from '../../features/mypage/components/Card'
import CategoryButton from '../../features/mypage/components/CategoryButton'
import Divider from '../../features/mypage/components/Divider'
import { HomeTabParamList, RootStackParamList } from '../../types'

import * as Styled from './styled'

type MypageScreenProps = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, 'Mypage'>,
  NativeStackScreenProps<RootStackParamList>
>

export default function MypageScreen({ navigation }: MypageScreenProps) {
  return (
    <Styled.Screen>
      <Divider />
      <Styled.CardWrapper>
        <Card />
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
      <CategoryButton onPress={() => {}}>알림 설정</CategoryButton>
      <CategoryButton onPress={() => {}}>정보 동의 설정</CategoryButton>
      <Divider />
      <CategoryButton onPress={() => {}}>이용약관</CategoryButton>
      <CategoryButton onPress={() => {}}>개인정보 처리방침</CategoryButton>
      <Divider />
      <CategoryButton onPress={() => {}}>문의하기</CategoryButton>
      <CategoryButton onPress={() => {}}>공지사항</CategoryButton>
    </Styled.Screen>
  )
}
