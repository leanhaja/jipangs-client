import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import theme from '../../styles/theme'
import IconButton, { type IconButtonProps } from '../icon-button'

import * as Styled from './styled'

export interface Button extends IconButtonProps {
  route: string
}

export interface BottomNavigationProps extends BottomTabBarProps {
  buttons: Button[]
}

function BottomNavigation({
  buttons,
  navigation,
  state,
}: BottomNavigationProps) {
  const { colors } = theme

  const onButtonClick = (route: string) => {
    navigation.navigate(route)
  }

  return (
    <Styled.Nav>
      {buttons.map(({ iconName, route }, index) => (
        <IconButton
          key={`${route}-${index + 1}`}
          onClick={() => {
            onButtonClick(route)
          }}
          iconColor={index === state?.index ? colors.BLACK : colors.GREY3}
          iconName={iconName}
        >
          <Styled.Text selected={index === state?.index}>{route}</Styled.Text>
        </IconButton>
      ))}
    </Styled.Nav>
  )
}

export default BottomNavigation
