import NextButton from '../../../components/button'
import Button from '../../../features/register/components/Button'
import Description from '../../../features/register/components/Description'
import Title from '../../../features/register/components/Title'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { addRegion } from '../../../redux/reducers/registerReducer'
import type { Region } from '../../../redux/types'
import { RegisterStackProps } from '../../../types/navigation'

import * as Styled from './styled'

const REGION: Region[] = [
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

export default function SelectRegionScreen({
  navigation,
}: RegisterStackProps<'SelectRegion'>) {
  const dispatch = useAppDispatch()
  const { region: selectedRegion } = useAppSelector((state) => state.register)

  const handleButtonPress = (value: Region) => {
    dispatch(addRegion(value))
  }

  const handleNextButton = () => {
    navigation.navigate('UserInfo')
  }

  return (
    <Styled.Screen>
      <Title>관심 지역을 선택해주세요.</Title>
      <Styled.GapNarrow />
      <Description>관심 지역의 활동을 규레이션 해드려요.</Description>
      <Styled.GapMedium />
      <Styled.ButtonContainer>
        {REGION.map((region, index) => (
          <Button
            key={`${region}-${index + 1}`}
            isSelected={selectedRegion?.includes(region)}
            onPress={handleButtonPress}
          >
            {region}
          </Button>
        ))}
      </Styled.ButtonContainer>
      <Styled.GapWide />
      <NextButton disabled={!selectedRegion?.length} onPress={handleNextButton}>
        다음
      </NextButton>
    </Styled.Screen>
  )
}
