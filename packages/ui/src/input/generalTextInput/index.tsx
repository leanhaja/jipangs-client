import { TextInput, View } from 'react-native-web'

import COLORS from '../../constants/color'
import Title from '../title'

import { styles } from './styles'

interface GeneralTextInputProps {
  isRequired: boolean
  placeholder: string
  title?: string
}

export function GeneralTextInput({
  isRequired,
  placeholder,
  title,
}: GeneralTextInputProps) {
  return (
    <View style={styles.container}>
      {!!title && <Title isRequired={isRequired} text={title} />}
      <TextInput
        autoComplete="email"
        placeholder={placeholder}
        placeholderTextColor={COLORS.GREY4}
        style={styles.input}
      />
    </View>
  )
}
