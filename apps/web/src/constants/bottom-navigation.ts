import { type IconName } from '@/components/icon'

export interface NavigationButton {
  iconName: IconName
  label: string
  route: string
}

export const BUTTONS: NavigationButton[] = [
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
]
