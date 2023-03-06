import Icon from '../../../../components/icon'
import { styles } from '../../../../styles/globalStyles'

import { StyleProps } from './styled'
import * as Styled from './styled'

interface LoginButtonProps extends StyleProps {
  onPress: () => void
}

export default function LoginButton({
  oauthProvider,
  onPress,
}: LoginButtonProps) {
  return (
    <Styled.Button
      oauthProvider={oauthProvider}
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Icon iconName={oauthProvider} />
      <Styled.Text>
        {oauthProvider === 'kakao' ? '카카오로 계속하기' : '애플로 계속하기'}
      </Styled.Text>
    </Styled.Button>
  )
}
