import { WebView, WebViewNavigation } from 'react-native-webview'

import { OAUTH_KAKAO_URI } from '../../../config'
import { useAppDispatch } from '../../redux/hooks'
import { login } from '../../redux/reducers/authReducer'
import { parseQueryString } from '../../utils/parseQuery'

export default function LoginWebView() {
  console.log(OAUTH_KAKAO_URI)
  const dispatch = useAppDispatch()
  const handleNavigationStateChange = (navigationState: WebViewNavigation) => {
    const queryObject = parseQueryString(navigationState.url)
    if (!queryObject || !queryObject.token || !queryObject.hasInfo) return
    const hasInfo = queryObject.hasInfo === 'true'
    dispatch(login({ hasInfo, token: queryObject.token }))
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
