import LogoImage from '../../../../../assets/images/logo.png'
import Button from '../../../../components/button'
import { COLORS } from '../../../../styles/colors'

import * as Styled from './styled'

interface CompleteModalProps {
  onClose: () => void
}

export default function CompleteModal({ onClose }: CompleteModalProps) {
  return (
    <Styled.BackDrop>
      <Styled.Modal>
        <Styled.Title>회원가입이 완료되었습니다!</Styled.Title>
        <Styled.Description>
          함께 활동하고 싶은 친구를 초대해보세요!
        </Styled.Description>
        <Styled.Logo source={LogoImage} />
        <Styled.ButtonContainer>
          <Button
            viewStyle={{
              backgroundColor: COLORS.GREY2,
              height: 48,
              width: 121,
            }}
            onPress={onClose}
            textStyle={{ color: COLORS.GREY4 }}
          >
            닫기
          </Button>
          <Button
            onPress={() => {}}
            viewStyle={{ height: 48, marginLeft: 16, width: 121 }}
          >
            초대하기
          </Button>
        </Styled.ButtonContainer>
      </Styled.Modal>
    </Styled.BackDrop>
  )
}
