import { MouseEvent } from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

import * as Styled from './styled'

import { MajorData } from '@/views/register/register'

interface ButtonProps extends UseControllerProps<MajorData> {
  children: string
}

export default function Button({ children, ...controllerProps }: ButtonProps) {
  const {
    field: { onChange, value },
  } = useController(controllerProps)

  const isSelected = Array.isArray(value) && value.includes(children)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
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
    <Styled.Button id={children} isSelected={isSelected} onClick={handleClick}>
      {children}
    </Styled.Button>
  )
}
