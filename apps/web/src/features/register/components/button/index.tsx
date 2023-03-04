import { MouseEvent } from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

import * as Styled from './styled'

import { FormData } from '@/views/register/register'

interface ButtonProps extends UseControllerProps<FormData> {
  children: string
  chooseOne?: boolean
}

export default function Button({
  children,
  chooseOne,
  ...controllerProps
}: ButtonProps) {
  const {
    field: { onChange, value },
  } = useController(controllerProps)

  const isSelected = Array.isArray(value) && value.includes(children)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (chooseOne) {
      onChange([children])
      return
    }

    if (!Array.isArray(value)) {
      onChange([children])
      return
    }

    if (value.includes(children)) {
      onChange(value.filter((item) => item !== children))
      return
    }

    onChange([...value, e.currentTarget.innerText])
  }

  return (
    <Styled.Button isSelected={isSelected} onClick={handleClick}>
      {children}
    </Styled.Button>
  )
}
