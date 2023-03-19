import { PressableProps } from 'react-native'

import CheckIcon from '../../../../components/icon/assets/check.svg'
import { COLORS } from '../../../../styles/colors'

import { StyleProps } from './styled'
import * as Styled from './styled'

export type AgreementFlatButtonProps = StyleProps & PressableProps

export default function AgreementFlatButton({
  checked,
  ...pressableProps
}: AgreementFlatButtonProps) {
  return (
    <Styled.Button checked={checked} {...pressableProps}>
      <CheckIcon stroke={checked ? COLORS.PRIMARY_BLUE : COLORS.GREY2} />
    </Styled.Button>
  )
}
