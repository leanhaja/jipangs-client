import { Fragment } from 'react'

import Item from './Item'
import * as Styled from './styled'

interface ModalProps {
  options: string[]
  title: string
}

export default function Modal({ options, title }: ModalProps) {
  return (
    <Styled.Backdrop>
      <Styled.Modal>
        <Styled.Title>{title}</Styled.Title>
        <Styled.GapWide />
        {options.map((grade, index) => (
          <Fragment key={`${grade}-${index + 1}`}>
            <Styled.GapNarrow />
            <Item>{grade}</Item>
          </Fragment>
        ))}
      </Styled.Modal>
    </Styled.Backdrop>
  )
}
