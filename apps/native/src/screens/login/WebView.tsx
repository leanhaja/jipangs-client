import { WebView, WebViewNavigation } from 'react-native-webview'

import { OAUTH_KAKAO_URI } from '../../../config'
import useAuth from '../../hooks/useAuth'
import { parseQueryString } from '../../utils/parseQuery'

export default function LoginWebView() {
  const { setToken } = useAuth()

  const handleNavigationStateChange = (navigationState: WebViewNavigation) => {
    const queryObject = parseQueryString(navigationState.url)
    if (!queryObject || !queryObject.token || !queryObject.hasInfo) return
    const hasInfo = queryObject.hasInfo === 'true'
    setToken({ hasInfo, token: queryObject.token })
  }
  return (
    <WebView
      source={{
        uri: OAUTH_KAKAO_URI,
      }}
      onNavigationStateChange={handleNavigationStateChange}
    />
  )
}
