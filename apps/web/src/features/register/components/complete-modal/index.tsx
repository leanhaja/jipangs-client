import { useRef } from 'react'

import Button from '../../../../components/user-interface/button'

import * as Styled from './styled'

import useOnClickOutside from '@/hooks/useOnClickOutside'
import theme from '@/styles/theme'

interface ModalProps {
  onClose: () => void
}

export default function Modal({ onClose }: ModalProps) {
  const modalRef = useRef(null)
  useOnClickOutside(modalRef, onClose)

  return (
    <Styled.BackDrop>
      <Styled.Modal ref={modalRef}>
        <Styled.Title>회원가입이 완료되었습니다!</Styled.Title>
        <Styled.Description>
          함께 활동하고 싶은 친구를 초대해보세요!
        </Styled.Description>
        <Styled.Image src="/images/logo.png" />
        <Styled.ButtonContainer>
          <Button
            backgroundColor={theme.colors.GREY2}
            color={theme.colors.GREY4}
            height="48px"
            onClick={onClose}
            width="121px"
          >
            닫기
          </Button>
          <Button height="48px" width="121px">
            초대하기
          </Button>
        </Styled.ButtonContainer>
      </Styled.Modal>
    </Styled.BackDrop>
  )
}
