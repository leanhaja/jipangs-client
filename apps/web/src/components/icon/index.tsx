import BeforeArrow from './assets/before_arrow.svg'
import BookMark from './assets/bookmark.svg'
import BookMarkColored from './assets/bookmark_colored.svg'
import CheckAfter from './assets/check_after.svg'
import CheckBefore from './assets/check_before.svg'
import Forum from './assets/forum.svg'
import Home from './assets/home.svg'
import Notification from './assets/notification.svg'
import Search from './assets/search.svg'
import Share from './assets/share.svg'
import User from './assets/user.svg'
import X from './assets/x.svg'

export type IconName =
  | 'before_arrow'
  | 'bookmark'
  | 'bookmark_colored'
  | 'check_after'
  | 'check_before'
  | 'home'
  | 'notification'
  | 'search'
  | 'share'
  | 'user'
  | 'x'
  | 'forum'

export interface IconProps {
  iconName: IconName
}

function Icon({ iconName }: IconProps) {
  const icons: Record<IconName, JSX.Element> = {
    before_arrow: <BeforeArrow />,
    bookmark: <BookMark />,
    bookmark_colored: <BookMarkColored />,
    check_after: <CheckAfter />,
    check_before: <CheckBefore />,
    forum: <Forum />,
    home: <Home />,
    notification: <Notification />,
    search: <Search />,
    share: <Share />,
    user: <User />,
    x: <X />,
  }

  return icons[iconName]
}

export default Icon
