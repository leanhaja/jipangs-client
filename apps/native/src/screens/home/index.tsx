import WebView, { type WebViewMessageEvent } from 'react-native-webview'

import BottomNavigation from '../../components/bottom-navigation'
import { JIPANGS_ADDRESS } from '../../constants'
import type { StackScreenProps } from '../../types'
import { isExternalLinkBridgeResponse } from '../../utils'

import * as Styled from './styled'

const LOCAL_JIPANGS = 'http://192.168.0.2:3000/'

export const BUTTONS = [
  {
    iconName: 'home',
    label: '홈',
    route: '/',
  },
  {
    iconName: 'bookmark_navigation',
    label: '스크랩',
    route: '/scrap',
  },
  {
    iconName: 'community',
    label: '커뮤니티',
    route: '/community',
  },
  {
    iconName: 'alarm',
    label: '알림',
    route: '/alarm',
  },
  {
    iconName: 'user',
    label: '마이페이지',
    route: '/user',
  },
] as const

function Home({ navigation }: StackScreenProps<'Home'>) {
  const onMessage = ({ nativeEvent: { data } }: WebViewMessageEvent) => {
    const parsedData: unknown = JSON.parse(data)

    if (!isExternalLinkBridgeResponse(parsedData)) return

    navigation.navigate('ExternalLink', parsedData)
  }

  return (
    <Styled.Container>
      <BottomNavigation
        buttons={BUTTONS.map(({ iconName, label, route }) => ({
          iconName,
          label,
          // onClick: createRouteClickHandler(route),
          route,
        }))}
      />
      <WebView
        onMessage={onMessage}
        source={{ uri: __DEV__ ? LOCAL_JIPANGS : JIPANGS_ADDRESS }}
      />
    </Styled.Container>
  )
}

export default Home
