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

export interface IconProps {
  iconName: IconName
}

const icons: Record<IconName, React.ReactElement> = {
  after_arrow: <AfterArrow />,
  alarm: <Alarm />,
  alarm_new: <AlarmNew />,
  alarm_new_inactive: <AlarmNewInActive />,
  apple: <AppleLogo />,
  before_arrow: <BeforeArrow />,
  bookmark: <BookMark />,
  bookmark_filled: <BookmarkFilled />,
  bookmark_navigation: <BookmarkNavigation />,
  check: <Check />,
  community: <Community />,
  home: <Home />,
  kakao: <KakaoLogo />,
  kakao_square: <KakaoSquare />,
  search: <Search />,
  share: <Share />,
  user: <User />,
  x: <X />,
}

function Icon({ iconName }: IconProps) {
  return icons[iconName]
}

export default Icon
