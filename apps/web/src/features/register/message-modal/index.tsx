import { useRef } from 'react'

import * as Styled from './styled'

import Button from '@/components/user-interface/button'
import useOnClickOutside from '@/hooks/useOnClickOutside'

interface ModalProps {
  message: string
  onClose: () => void
}

export default function Modal({ message, onClose }: ModalProps) {
  const modalRef = useRef(null)
  useOnClickOutside(modalRef, onClose)
  return (
    <Styled.BackDrop>
      <Styled.Modal ref={modalRef}>
        <Styled.Message>{message}</Styled.Message>
        <Button height="48px" onClick={onClose} width="264px">
          확인
        </Button>
      </Styled.Modal>
    </Styled.BackDrop>
  )
}
