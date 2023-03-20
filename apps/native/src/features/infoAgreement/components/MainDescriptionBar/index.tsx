import ArrowRightIcon from '../../../../components/icon/assets/after_arrow.svg'
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
      <Styled.Wrapper>
        <AgreementCircleButton checked={checked} onPress={onPress} />
        <Styled.Text>{text}</Styled.Text>
      </Styled.Wrapper>
      <Styled.Button>
        <ArrowRightIcon />
      </Styled.Button>
    </Styled.MainDescriptionBar>
  )
}
