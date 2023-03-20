import ArrowRightIcon from '../../../../components/icon/assets/after_arrow.svg'
import AgreementFlatButton, {
  type AgreementFlatButtonProps,
} from '../AgreementFlatButton'

import * as Styled from './styled'

interface SubDescriptionBarProps extends AgreementFlatButtonProps {
  onPress: () => void
  text: string
}

export default function SubDescriptionBar({
  checked,
  onPress,
  text,
}: SubDescriptionBarProps) {
  return (
    <Styled.MainDescriptionBar>
      <Styled.Wrapper>
        <AgreementFlatButton checked={checked} onPress={onPress} />
        <Styled.Text>{text}</Styled.Text>
      </Styled.Wrapper>
      <Styled.Button>
        <ArrowRightIcon />
      </Styled.Button>
    </Styled.MainDescriptionBar>
  )
}
