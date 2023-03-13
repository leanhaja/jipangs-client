import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'

import useLoadFonts from './hooks/useLoadFonts'
import Routes from './routes/Routes'

export default function Native() {
  const [isFontsLoaded] = useLoadFonts()

  if (!isFontsLoaded) return <Text>폰트 로딩중</Text>

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}
