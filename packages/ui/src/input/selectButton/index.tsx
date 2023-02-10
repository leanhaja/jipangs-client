import { Dispatch, SetStateAction } from 'react'
import { Pressable, Text, View } from 'react-native'

import Title from '../title'

import { styles } from './styles'

interface SelectButtonProps {
  isRequired?: boolean
  onSelect: Dispatch<SetStateAction<string>>
  option1: string
  option2: string
  value: string
}

export function SelectButton({
  isRequired,
  onSelect,
  option1,
  option2,
  value,
}: SelectButtonProps) {
  return (
    <View style={styles.outerContainer}>
      <Title isRequired={!!isRequired} text="성별" />
      <View style={styles.innerContainer}>
        <Pressable
          onPress={() => onSelect(option1)}
          style={[styles.button, option1 === value && styles.selected]}
        >
          <Text style={[styles.text, option1 === value && styles.selected]}>
            {option1}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => onSelect(option2)}
          style={[styles.button, option2 === value && styles.selected]}
        >
          <Text style={[styles.text, option2 === value && styles.selected]}>
            {option2}
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
