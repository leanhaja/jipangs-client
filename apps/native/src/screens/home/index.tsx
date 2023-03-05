import WebView, { type WebViewMessageEvent } from 'react-native-webview'

import { JIPANGS_ADDRESS } from '../../constants'
import type { StackScreenProps } from '../../types'
import { isExternalLinkBridgeResponse } from '../../utils'

import * as Styled from './styled'

const LOCAL_JIPANGS = 'http://192.168.0.2:3000/'

function Home({ navigation }: StackScreenProps<'Home'>) {
  const onMessage = ({ nativeEvent: { data } }: WebViewMessageEvent) => {
    const parsedData: unknown = JSON.parse(data)

    if (!isExternalLinkBridgeResponse(parsedData)) return

    navigation.navigate('ExternalLink', parsedData)
  }

  return (
    <Styled.Container>
      <WebView
        onMessage={onMessage}
        source={{ uri: __DEV__ ? LOCAL_JIPANGS : JIPANGS_ADDRESS }}
      />
    </Styled.Container>
  )
}

export default Home
