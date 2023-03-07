import { StyleProps } from './styled'
import * as Styled from './styled'

interface ButtonProps<T> extends StyleProps {
  children: T
  onPress: (value: T) => void
}

export default function Button<T extends string>({
  children,
  isSelected,
  onPress,
}: ButtonProps<T>) {
  const handlePress = () => {
    onPress(children)
  }
  return (
    <Styled.Button isSelected={isSelected} onPress={handlePress}>
      <Styled.Text isSelected={isSelected}>{children}</Styled.Text>
    </Styled.Button>
  )
}
