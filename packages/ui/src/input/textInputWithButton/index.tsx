import { TextInput, TextInputProps, View } from 'react-native'

import { Button } from '../../button'
import COLORS from '../../constants/color'
import Title from '../title'

import { styles } from './styles'

interface TextInputWithButtonProps extends TextInputProps {
  isRequired?: boolean
  title?: string
}

export function TextInputWithButton({
  isRequired,
  title,
  ...props
}: TextInputWithButtonProps) {
  return (
    <View style={styles.outerContainer}>
      {!!title && <Title isRequired={!!isRequired} text={title} />}
      <View style={styles.innerContainer}>
        <TextInput
          {...props}
          placeholderTextColor={COLORS.GREY3}
          style={styles.input}
        />
        <Button borderRadius={6} height={48} text="중복확인" width={96} />
      </View>
    </View>
  )
}
