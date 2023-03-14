import { type SvgProps } from 'react-native-svg'

import AfterArrow from './assets/after_arrow.svg'
import Alarm from './assets/alarm.svg'
import AlarmNew from './assets/alarm_new.svg'
import AlarmNewInActive from './assets/alarm_new_inactive.svg'
import BeforeArrow from './assets/before_arrow.svg'
import BookMark from './assets/bookmark.svg'
import BookmarkFilled from './assets/bookmark_filled.svg'
import BookmarkNavigation from './assets/bookmark_navigation.svg'
import Check from './assets/check.svg'
import Community from './assets/community.svg'
import Home from './assets/home.svg'
import KakaoSquare from './assets/kakao_square.svg'
import AppleLogo from './assets/logo_apple.svg'
import KakaoLogo from './assets/logo_kakao.svg'
import Search from './assets/search.svg'
import Share from './assets/share.svg'
import User from './assets/user.svg'
import X from './assets/x.svg'

export type IconName =
  | 'alarm'
  | 'alarm_new'
  | 'alarm_new_inactive'
  | 'before_arrow'
  | 'bookmark'
  | 'bookmark_filled'
  | 'bookmark_navigation'
  | 'check'
  | 'community'
  | 'home'
  | 'search'
  | 'share'
  | 'user'
  | 'x'
  | 'apple'
  | 'kakao'
  | 'after_arrow'
  | 'kakao_square'

export interface IconProps extends SvgProps {
  iconName: IconName
}

function Icon({ iconName, ...restProps }: IconProps) {
  const icons: Record<IconName, React.ReactElement> = {
    after_arrow: <AfterArrow {...restProps} />,
    alarm: <Alarm {...restProps} />,
    alarm_new: <AlarmNew {...restProps} />,
    alarm_new_inactive: <AlarmNewInActive {...restProps} />,
    apple: <AppleLogo {...restProps} />,
    before_arrow: <BeforeArrow {...restProps} />,
    bookmark: <BookMark {...restProps} />,
    bookmark_filled: <BookmarkFilled {...restProps} />,
    bookmark_navigation: <BookmarkNavigation {...restProps} />,
    check: <Check {...restProps} />,
    community: <Community {...restProps} />,
    home: <Home {...restProps} />,
    kakao: <KakaoLogo {...restProps} />,
    kakao_square: <KakaoSquare {...restProps} />,
    search: <Search {...restProps} />,
    share: <Share {...restProps} />,
    user: <User {...restProps} />,
    x: <X {...restProps} />,
  }

  return icons[iconName]
}

export default Icon
