import Icon from '../../../../components/icon'

import * as Styled from './styled'

interface CategoryButtonProps {
  children: string
  onPress: () => void
}

export default function CategoryButton({
  children,
  onPress,
}: CategoryButtonProps) {
  return (
    <Styled.Container onPress={onPress}>
      <Styled.Text>{children}</Styled.Text>
      <Icon iconName="after_arrow" />
    </Styled.Container>
  )
}
