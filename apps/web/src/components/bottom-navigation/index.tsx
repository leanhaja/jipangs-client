import classNames from 'classnames'
import { useState } from 'react'

import * as Styled from './styled'

import { type IconButtonProps } from '@/components/icon-button'

export interface Button extends Omit<IconButtonProps, 'ariaLabel'> {
  label: string
}

export interface BottomNavigationProps {
  buttons: Button[]
}

function BottomNavigation({ buttons }: BottomNavigationProps) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  return (
    <Styled.Nav>
      {buttons.map(({ iconName, label, onClick }, index) => (
        <Styled.Button
          key={`${label}-${index + 1}`}
          onClick={() => {
            setSelectedTabIndex(index)
            onClick?.()
          }}
          ariaLabel={label}
          className={classNames({ selected: selectedTabIndex === index })}
          iconName={iconName}
        >
          <span>{label}</span>
        </Styled.Button>
      ))}
    </Styled.Nav>
  )
}

export default BottomNavigation
