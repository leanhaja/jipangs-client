import NextButton from '../../../components/button'
import Button from '../../../features/register/components/Button'
import Description from '../../../features/register/components/Description'
import Title from '../../../features/register/components/Title'

import * as Styled from './styled'

const MAJOR = [
  '간호학',
  '의학',
  '치의학',
  '약학',
  '물리치료',
  '작업치료',
  '임상병리',
  '재활관련',
  '방사선',
  '응급구조',
  '치위생',
  '보건의료행정',
  '의공.의과학',
  '환경,보건 관련',
  '의료정보학',
  '치기공',
  '한의학',
]

export default function SelectMajorScreen() {
  return (
    <Styled.Screen>
      <Title>전공을 선택해주세요.</Title>
      <Styled.GapNarrow />
      <Description>
        전공에 꼭 맞는 봉사활동 및 대외활동 추천을 위해 필요해요.
      </Description>
      <Styled.GapMedium />
      <Styled.ButtonContainer>
        {MAJOR.map((major, index) => (
          <Button key={`${major}-${index + 1}`}>{major}</Button>
        ))}
      </Styled.ButtonContainer>
      <Styled.GapWide />
      <NextButton onPress={() => {}}>다음</NextButton>
    </Styled.Screen>
  )
}
