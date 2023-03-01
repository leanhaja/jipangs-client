import { PropsWithChildren } from 'react'

import Label from '../label'

import * as Styled from './styled'

interface ButtonInputProps extends PropsWithChildren {
  title?: string
}

export default function ButtonInput({ children, title }: ButtonInputProps) {
  return (
    <>
      <Label>{title}</Label>
      <Styled.ButtonInput>{children}</Styled.ButtonInput>
    </>
  )
}
