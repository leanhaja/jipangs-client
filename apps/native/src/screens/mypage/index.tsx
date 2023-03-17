import Card from '../../features/mypage/components/Card'
import CategoryButton from '../../features/mypage/components/CategoryButton'
import Divider from '../../features/mypage/components/Divider'

import * as Styled from './styled'

export default function MypageScreen() {
  return (
    <Styled.Screen>
      <Divider />
      <Styled.CardWrapper>
        <Card />
      </Styled.CardWrapper>
      <Divider />
      <CategoryButton onPress={() => {}}>내 정보</CategoryButton>
      <CategoryButton onPress={() => {}}>로그인 정보</CategoryButton>
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
