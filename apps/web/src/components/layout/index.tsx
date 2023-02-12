import { useRouter } from 'next/router'

import BottomNavigation from '@/components/bottom-navigation'
import { BUTTONS } from '@/constants/bottom-navigation'

export interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const router = useRouter()

  return (
    <>
      <BottomNavigation
        buttons={BUTTONS.map(({ iconName, label, route }) => ({
          iconName,
          label,
          onClick() {
            router.push(route).catch(() => {
              throw new Error('routing error occurred!')
            })
          },
        }))}
      />
      {children}
    </>
  )
}

export default Layout
