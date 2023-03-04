import { DevTool } from '@hookform/devtools'
import { useFormContext } from 'react-hook-form'

import { FormData } from '../register'

import * as Styled from './styled'

import NextButton from '@/components/user-interface/button'
import Button from '@/features/register/components/button'
import Description from '@/features/register/components/description'
import Title from '@/features/register/components/title'

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

export default function SelectMajorPage() {
  const { control, watch } = useFormContext<FormData>()

  const { abstractMajors } = watch()

  return (
    <>
      <Styled.Container>
        <Title>전공을 선택해주세요.</Title>
        <Description>
          전공에 꼭 맞는 봉사활동 및 대외활동 추천을 위해 필요해요.
        </Description>
        <Styled.ButtonContainer>
          {MAJOR.map((major, index) => (
            <Button
              key={`${major}-${index + 1}`}
              chooseOne
              control={control}
              name="abstractMajors"
            >
              {major}
            </Button>
          ))}
        </Styled.ButtonContainer>
        <NextButton disabled={abstractMajors.length !== 1}>다음</NextButton>
      </Styled.Container>
      <DevTool control={control} />
    </>
  )
}
