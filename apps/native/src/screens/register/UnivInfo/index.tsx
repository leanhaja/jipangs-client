import Button from '../../../components/button'
import Modal from '../../../features/register/components/InputModal'
import InputShapeButton from '../../../features/register/components/InputShapeButton'

import * as Styled from './styled'

const GRADE = ['23학번', '22학번', '21학번', '20학번']

export default function UnivInfoScreen() {
  return (
    <Styled.Screen>
      <Modal options={GRADE} title="학번 선택" />
      <InputShapeButton title="대학교">
        대학교를 선택해 주세요.
      </InputShapeButton>
      <Styled.GapNarrow />
      <InputShapeButton title="학과">학과를 선택해 주세요.</InputShapeButton>
      <Styled.GapNarrow />
      <InputShapeButton title="학번">학번를 선택해 주세요.</InputShapeButton>
      <Styled.GapNarrow />
      <InputShapeButton title="학년">학년를 선택해 주세요.</InputShapeButton>
      <Styled.GapWide />
      <Button onPress={() => {}}>회원가입 완료</Button>
    </Styled.Screen>
  )
}
