import { Text } from 'react-native'

import { type IconButtonProps } from '../icon-button'

import * as Styled from './styled'

export interface Button extends IconButtonProps {
  label: string
  route: string
}

export interface BottomNavigationProps {
  buttons: Button[]
  onNavigationChange?: (routeName: string) => void
  // selectedRouteName?: string
}

function BottomNavigation({
  buttons,
  onNavigationChange,
}: // selectedRouteName,
BottomNavigationProps) {
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
          // className={classNames({ selected: route === selectedRouteName })}
          iconName={iconName}
        >
          <Text>{label}</Text>
        </Styled.Button>
      ))}
    </Styled.Nav>
  )
}

export default BottomNavigation
