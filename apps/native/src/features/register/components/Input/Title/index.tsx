import * as Styled from './styled'

interface TitleProps {
  children: string
  isRequired?: boolean
}

export default function Title({ children, isRequired }: TitleProps) {
  return (
    <Styled.Container>
      <Styled.Text>{children}</Styled.Text>
      {isRequired && <Styled.Star>*</Styled.Star>}
    </Styled.Container>
  )
}
