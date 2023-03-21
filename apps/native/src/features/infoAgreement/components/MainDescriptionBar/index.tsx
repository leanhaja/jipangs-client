import AgreementCircleButton, {
  type AgreementCircleButtonProps,
} from '../AgreementCircleButton'

import * as Styled from './styled'

interface MainDescriptionBarProps extends AgreementCircleButtonProps {
  onPress: () => void
  text: string
}

export default function MainDescriptionBar({
  checked,
  onPress,
  text,
}: MainDescriptionBarProps) {
  return (
    <Styled.MainDescriptionBar>
      <AgreementCircleButton checked={checked} onPress={onPress} />
      <Styled.Text>{text}</Styled.Text>
    </Styled.MainDescriptionBar>
  )
}
