import { TextInput, View, TextInputProps, Text } from 'react-native'

import COLORS from '../../constants/color'
import { Title } from '../title'

import { styles } from './styles'

interface GeneralTextInputProps extends TextInputProps {
  errorMessage?: string
  isInValid?: boolean
  isRequired?: boolean
  isValid?: boolean
  title?: string
}

export function GeneralTextInput({
  errorMessage,
  isInValid,
  isRequired,
  isValid,
  title,
  ...props
}: GeneralTextInputProps) {
  return (
    <View style={styles.container}>
      {!!title && <Title isRequired={!!isRequired} text={title} />}
      <TextInput
        {...props}
        style={[
          styles.input,
          isValid && styles.valid,
          isInValid && styles.invalid,
        ]}
        placeholderTextColor={COLORS.GREY3}
      />
      {isInValid && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  )
}
