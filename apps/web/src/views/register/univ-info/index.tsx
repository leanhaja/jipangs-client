import * as Styled from './styled'

import Button from '@/components/user-interface/button'
import ButtonInput from '@/features/register/components/button-input'

export default function UnivInfoPage() {
  return (
    <Styled.Container>
      <ButtonInput title="대학교">대학교를 선택해주세요.</ButtonInput>
      <ButtonInput title="학과">학과를 선택해주세요.</ButtonInput>
      <ButtonInput title="학번">학번를 선택해주세요.</ButtonInput>
      <ButtonInput title="학년">학년를 선택해주세요.</ButtonInput>
      <Button disabled>회원가입 완료</Button>
    </Styled.Container>
  )
}
