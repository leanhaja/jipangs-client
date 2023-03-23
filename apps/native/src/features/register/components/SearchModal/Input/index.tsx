import { Pressable, TextInputProps } from 'react-native'

import Icon from '../../../../../components/icon'
import { COLORS } from '../../../../../styles/colors'

import * as Styled from './styled'

interface InputProps extends TextInputProps {
  hasValue: boolean
  onClickClose: () => void
}

export default function Input({
  hasValue,
  onClickClose,
  ...textInputProps
}: InputProps) {
  return (
    <Styled.InputContainer>
      <Styled.IconWrapperLeft>
        <Icon fill={COLORS.GREY4} iconName="search" />
      </Styled.IconWrapperLeft>
      <Styled.Input {...textInputProps} />
      {hasValue && (
        <Styled.IconWrapperRight>
          <Pressable onPress={onClickClose}>
            <Icon fill={COLORS.GREY4} iconName="x" />
          </Pressable>
        </Styled.IconWrapperRight>
      )}
    </Styled.InputContainer>
  )
}
