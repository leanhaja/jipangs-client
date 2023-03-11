import { Pressable, Text } from 'react-native'

import Icon from '../../../../components/icon'

import { styles } from './styles'

interface LoginButtonProps {
  oauthProvider: 'kakao' | 'apple'
  onPress: () => void
}

export default function LoginButton({
  oauthProvider,
  onPress,
}: LoginButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        oauthProvider === 'kakao' ? styles.kakao : styles.apple,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Icon iconName={oauthProvider} />
      <Text
        style={[
          styles.text,
          oauthProvider === 'kakao' ? styles.kakao : styles.apple,
        ]}
      >
        {oauthProvider === 'kakao' ? '카카오로 계속하기' : '애플로 계속하기'}
      </Text>
    </Pressable>
  )
}
