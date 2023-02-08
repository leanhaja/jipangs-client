import { TextInput, View } from 'react-native-web'

import { Button } from '../../button'
import COLORS from '../../constants/color'
import Title from '../title'

import { styles } from './styles'

interface TextInputWithButtonProps {
  isRequired: boolean
  placeholder: string
  title?: string
}

export function TextInputWithButton({
  isRequired,
  placeholder,
  title,
}: TextInputWithButtonProps) {
  return (
    <View style={styles.outerContainer}>
      {!!title && <Title isRequired={isRequired} text={title} />}
      <View style={styles.innerContainer}>
        <TextInput
          autoComplete="email"
          placeholder={placeholder}
          placeholderTextColor={COLORS.GREY4}
          style={styles.input}
        />
        <Button borderRadius={6} text="중복확인" width={96} />
      </View>
    </View>
  )
}
