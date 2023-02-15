import { useMemo } from 'react'
import {
  StyleSheet,
  GestureResponderEvent,
  Pressable,
  Text,
} from 'react-native'

import COLORS from '../constants/color'

export interface ButtonProps {
  borderRadius?: number
  disabled?: boolean
  height?: number
  onPress?: (event: GestureResponderEvent) => void
  text: string
  width?: number
}

export function Button({
  borderRadius,
  disabled,
  height,
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
          backgroundColor: disabled ? COLORS.DISABLED : COLORS.PRIMARY_BLUE,
          borderRadius: borderRadius || 12,
          display: 'flex',
          height: height || 59,
          justifyContent: 'center',
          width,
        },
        text: {
          color: disabled ? COLORS.BLACK : COLORS.WHITE,
          fontSize: 16,
          fontWeight: 'bold',
        },
      }),
    [borderRadius, disabled, height, width]
  )

  return (
    <Pressable disabled={disabled} onPress={onPress} style={[styles.container]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}
