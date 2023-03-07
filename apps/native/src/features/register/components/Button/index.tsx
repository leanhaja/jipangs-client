import { MajorType } from '../../../../redux/reducers/registerReducer'

import { StyleProps } from './styled'
import * as Styled from './styled'

interface ButtonProps extends StyleProps {
  children: MajorType['major']
  onPress: (value: MajorType['major']) => void
}

export default function Button({ children, isSelected, onPress }: ButtonProps) {
  const handlePress = () => {
    onPress(children)
  }
  return (
    <Styled.Button isSelected={isSelected} onPress={handlePress}>
      <Styled.Text isSelected={isSelected}>{children}</Styled.Text>
    </Styled.Button>
  )
}
