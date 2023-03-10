import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import Input from './Input'
import * as Styled from './styled'

interface SearchModalProps {
  isVisible: boolean
}

export default function SearchModal({ isVisible }: SearchModalProps) {
  return (
    <Styled.Modal
      animationType="slide"
      hardwareAccelerated
      presentationStyle="fullScreen"
      visible={isVisible}
    >
      <SafeAreaProvider>
        <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
          <Input />
        </SafeAreaView>
      </SafeAreaProvider>
    </Styled.Modal>
  )
}
