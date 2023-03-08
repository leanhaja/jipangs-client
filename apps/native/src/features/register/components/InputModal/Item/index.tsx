import * as Styled from './styled'

interface ItemProps {
  children: string
}

export default function Item({ children }: ItemProps) {
  return (
    <Styled.Item>
      <Styled.Text>{children}</Styled.Text>
    </Styled.Item>
  )
}
