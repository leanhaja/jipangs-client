import classNames from 'classnames'

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
  const onButtonClick = (route: string, onClick?: VoidFunction) => {
    onNavigationChange?.(route)
    onClick?.()
  }

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
