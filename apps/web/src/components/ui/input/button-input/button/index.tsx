import { Dispatch, PropsWithChildren, SetStateAction, MouseEvent } from 'react'

import * as Styled from './styled'
import { StyleProps } from './styled'

interface ButtonProps extends StyleProps {
  setValue: Dispatch<SetStateAction<string>>
  value?: string
}

export default function Button({
  borderRadius,
  children,
  height,
  setValue,
  value,
  width,
}: PropsWithChildren<ButtonProps>) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setValue(e.currentTarget.innerText)
  }

  return (
    <Styled.Button
      borderRadius={borderRadius}
      height={height}
      onClick={handleClick}
      selected={children === value}
      width={width}
    >
      {children}
    </Styled.Button>
  )
}
