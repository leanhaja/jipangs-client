import { TextInput, View, TextInputProps } from 'react-native-web'

import COLORS from '../../constants/color'
import Title from '../title'

import { styles } from './styles'

interface GeneralTextInputProps extends TextInputProps {
  isRequired?: boolean
  title?: string
}

export function GeneralTextInput({
  isRequired,
  title,
  ...props
}: GeneralTextInputProps) {
  return (
    <View style={styles.container}>
      {!!title && <Title isRequired={!!isRequired} text={title} />}
      <TextInput
        {...props}
        placeholderTextColor={COLORS.GREY4}
        style={styles.input}
      />
    </View>
  )
}
