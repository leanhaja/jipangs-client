import { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { GestureResponderEvent, Pressable, Text } from 'react-native-web'

import COLORS from '../constants/color'

export interface ButtonProps {
  borderRadius?: number
  disabled?: boolean
  onPress?: (event: GestureResponderEvent) => void
  text: string
  width?: number
}

export function Button({
  borderRadius,
  disabled,
  onPress,
  text,
  width,
}: ButtonProps) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          alignItems: 'center',
          alignSelf: width ? 'auto' : 'stretch',
          backgroundColor: disabled ? COLORS.DISABLED : COLORS.BUTTON_GREEN,
          borderRadius: borderRadius || 12,
          display: 'flex',
          height: 56,
          justifyContent: 'center',
          width,
        },
        text: {
          color: disabled ? COLORS.BLACK : COLORS.WHITE,
          fontSize: 16,
          fontWeight: 'bold',
        },
      }),
    [borderRadius, disabled, width]
  )

  return (
    <Pressable disabled={disabled} onPress={onPress} style={[styles.container]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}
