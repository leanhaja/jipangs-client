import { PropsWithChildren } from 'react'
import {
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

import { styles } from './styles'

interface ButtonProps extends PropsWithChildren {
  disabled?: boolean
  onPress: () => void
  textStyle?: StyleProp<TextStyle>
  viewStyle?: StyleProp<ViewStyle>
}

export default function Button({
  children,
  disabled,
  onPress,
  textStyle,
  viewStyle,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <View style={[styles.button, disabled && styles.disabled, viewStyle]}>
        <Text style={[styles.text, disabled && styles.disabled, textStyle]}>
          {children}
        </Text>
      </View>
    </Pressable>
  )
}
