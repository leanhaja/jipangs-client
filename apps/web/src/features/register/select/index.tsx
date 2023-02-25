import { AnimatePresence, motion } from 'framer-motion'
import { Dispatch, SetStateAction, useRef, MouseEvent } from 'react'

import * as Styled from './styled'

import useOnClickOutside from '@/hooks/useOnClickOutside'

interface Option {
  value: string
}

interface SelectProps {
  onClose: () => void
  onSelect: Dispatch<SetStateAction<string>>
  options: Option[]
  title: string
}

export default function Select({
  onClose,
  onSelect,
  options,
  title,
}: SelectProps) {
  const selectRef = useRef(null)
  useOnClickOutside(selectRef, onClose)

  const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {
    onSelect(e.currentTarget.value)
    onClose()
  }

  return (
    <Styled.BackDrop>
      <Styled.Container
        ref={selectRef}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        initial={{ y: '100%' }}
        transition={{ duration: 0.4 }}
      >
        <Styled.Title>{title}</Styled.Title>
        {options.map((option, index) => {
          const key = `${index}-${option.value}`
          return (
            <Styled.SelectItem key={key} onClick={handleSelect}>
              {option.value}
            </Styled.SelectItem>
          )
        })}
      </Styled.Container>
    </Styled.BackDrop>
  )
}
