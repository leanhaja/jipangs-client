import {
  PropsWithChildren,
  MouseEvent,
  Dispatch,
  SetStateAction,
  useState,
} from 'react'

import * as Styled from './styled'

interface ButtonProps extends PropsWithChildren {
  onClick: Dispatch<SetStateAction<string>>
}

export default function Button({ children, onClick }: ButtonProps) {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick(e.currentTarget.innerText)
    setIsSelected((prev) => !prev)
  }

  return (
    <Styled.Button isSelected={isSelected} onClick={handleClick}>
      {children}
    </Styled.Button>
  )
}
