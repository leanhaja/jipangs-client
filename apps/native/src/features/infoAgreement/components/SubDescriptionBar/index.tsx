import ArrowRightIcon from '../../../../components/icon/assets/after_arrow.svg'
import AgreementFlatButton, {
  type AgreementFlatButtonProps,
} from '../AgreementFlatButton'

import * as Styled from './styled'

interface SubDescriptionBarProps extends AgreementFlatButtonProps {
  onPressButton: () => void
  onPresslink: () => void
  text: string
}

export default function SubDescriptionBar({
  checked,
  onPressButton,
  onPresslink,
  text,
}: SubDescriptionBarProps) {
  return (
    <Styled.MainDescriptionBar>
      <Styled.Wrapper>
        <AgreementFlatButton checked={checked} onPress={onPressButton} />
        <Styled.Text>{text}</Styled.Text>
      </Styled.Wrapper>
      <Styled.Button onPress={onPresslink}>
        <ArrowRightIcon />
      </Styled.Button>
    </Styled.MainDescriptionBar>
  )
}
