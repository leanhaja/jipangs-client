import Button from '../../../components/button'
import InputShapeButton from '../../../features/register/components/InputShapeButton'
import Modal from '../../../features/register/components/Modal'

import * as Styled from './styled'

export default function UnivInfoScreen() {
  return (
    <Styled.Screen>
      <Modal />
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
