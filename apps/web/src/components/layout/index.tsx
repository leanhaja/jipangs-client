import { useRouter } from 'next/router'

import BottomNavigation from '@/components/bottom-navigation'
import { BUTTONS } from '@/constants/bottom-navigation'

export interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const router = useRouter()

  const createRouteClickHandler = (routeName: string) => () => {
    router.push(routeName).catch(() => {
      throw new Error('routing error occurred!')
    })
  }

  return (
    <>
      <BottomNavigation
        buttons={BUTTONS.map(({ iconName, label, route }) => ({
          iconName,
          label,
          onClick: createRouteClickHandler(route),
          route,
        }))}
        selectedRouteName={router.pathname}
      />
      {children}
    </>
  )
}

export default Layout
