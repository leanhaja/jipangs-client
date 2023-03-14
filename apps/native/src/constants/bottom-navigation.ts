export const BOTTOM_TAB_NAVIGATION = {
  HOME: '홈' as const,
  MY_PAGE: '마이페이지' as const,
  SCRAP: '스크랩' as const,
}

export const BUTTONS = [
  {
    iconName: 'home' as const,
    route: BOTTOM_TAB_NAVIGATION.HOME,
  },
  {
    iconName: 'bookmark_navigation' as const,
    route: BOTTOM_TAB_NAVIGATION.SCRAP,
  },
  {
    iconName: 'user' as const,
    route: BOTTOM_TAB_NAVIGATION.MY_PAGE,
  },
]

export const ROUTE_PATHS = BUTTONS.map(({ route }) => route)
