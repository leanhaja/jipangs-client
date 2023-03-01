import classNames from 'classnames'
import { useRouter } from 'next/router'

import * as Styled from './styled'

import { type IconButtonProps } from '@/components/icon-button'

export interface Button extends Omit<IconButtonProps, 'ariaLabel'> {
  label: string
  route: string
}

export interface BottomNavigationProps {
  buttons: Button[]
  onNavigationChange?: (routeName: string) => void
  selectedRouteName?: string
}

function BottomNavigation({
  buttons,
  onNavigationChange,
  selectedRouteName,
}: BottomNavigationProps) {
  const router = useRouter()

  const onButtonClick = (route: string, onClick?: VoidFunction) => {
    onNavigationChange?.(route)
    onClick?.()
  }

  if (router.pathname === '/login') return null

  return (
    <Styled.Nav>
      {buttons.map(({ iconName, label, onClick, route }, index) => (
        <Styled.Button
          key={`${label}-${index + 1}`}
          onClick={() => {
            onButtonClick(route, onClick)
          }}
          ariaLabel={label}
          className={classNames({ selected: route === selectedRouteName })}
          iconName={iconName}
        >
          <span>{label}</span>
        </Styled.Button>
      ))}
    </Styled.Nav>
  )
}

export default BottomNavigation
