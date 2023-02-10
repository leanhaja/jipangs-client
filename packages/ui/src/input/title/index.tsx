import { Text, View } from 'react-native'

import { styles } from './styles'

interface TitleProps {
  isRequired: boolean
  text: string
}

export default function Title({ isRequired, text }: TitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      {isRequired && <Text style={styles.isRequired}>*</Text>}
    </View>
  )
}
