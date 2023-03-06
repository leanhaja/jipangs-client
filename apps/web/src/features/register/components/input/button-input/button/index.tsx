import type { PropsWithChildren, MouseEvent } from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

import * as Styled from './styled'
import { StyleProps } from './styled'

import { FormData } from '@/views/register/user-info/userInfo'

type ButtonProps = StyleProps & UseControllerProps<FormData>

export default function Button({
  borderRadius,
  children,
  height,
  width,
  ...controllerProps
}: PropsWithChildren<ButtonProps>) {
  const {
    field: { onChange, value },
  } = useController(controllerProps)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onChange(e.currentTarget.innerText)
  }

  return (
    <Styled.Button
      borderRadius={borderRadius}
      height={height}
      onClick={handleClick}
      selected={children === value}
      type="button"
      width={width}
    >
      {children}
    </Styled.Button>
  )
}
