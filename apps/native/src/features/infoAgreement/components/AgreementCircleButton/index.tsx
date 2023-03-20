import { PressableProps } from 'react-native'

import CheckIcon from '../../../../components/icon/assets/check.svg'

import { StyleProps } from './styled'
import * as Styled from './styled'

export type AgreementCircleButtonProps = StyleProps & PressableProps

export default function AgreementCircleButton({
  checked,
  ...pressableProps
}: AgreementCircleButtonProps) {
  return (
    <Styled.Button checked={checked} {...pressableProps}>
      <CheckIcon stroke={checked ? 'white' : 'black'} />
    </Styled.Button>
  )
}
