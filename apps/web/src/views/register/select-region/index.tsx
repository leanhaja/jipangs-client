import * as Styled from './styled'

import NextButton from '@/components/user-interface/button'
import Button from '@/features/register/components/button'
import Description from '@/features/register/components/description'
import Title from '@/features/register/components/title'

const REGION = [
  '서울',
  '경기',
  '인천',
  '대전',
  '충북',
  '충남',
  '대구',
  '경북',
  '부산',
  '울산',
  '경남',
  '광주',
  '전북',
  '전남',
  '강원',
  '제주',
]

export default function SelectRegionPage() {
  return (
    <Styled.Container>
      <Title>관심 지역을 선택해주세요.</Title>
      <Description>관심 지역의 활동을 큐레이션 해드려요.</Description>
      <Styled.ButtonContainer>
        {REGION.map((region, index) => (
          <Button key={`${region}-${index + 1}`} onClick={() => {}}>
            {region}
          </Button>
        ))}
      </Styled.ButtonContainer>
      <NextButton disabled>다음</NextButton>
    </Styled.Container>
  )
}
