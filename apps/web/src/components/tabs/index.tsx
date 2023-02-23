import classNames from 'classnames'

import * as Styled from './styled'

export interface TabButton {
  label: string
  onClick?: VoidFunction
}

export interface TabsProps {
  as?: React.ElementType
  buttons: TabButton[]
  onTabChange?: (index: number) => void
  selectedTabIndex?: number
}

function Tabs({ as, buttons, onTabChange, selectedTabIndex = 0 }: TabsProps) {
  const onTabClick = (index: number, onClick?: VoidFunction) => {
    onClick?.()
    onTabChange?.(index)
  }

  return (
    <Styled.Container as={as}>
      {buttons.map(({ label, onClick }, index) => (
        <Styled.Button
          key={`${label}-${index + 1}`}
          onClick={() => {
            onTabClick(index, onClick)
          }}
          className={classNames({ active: selectedTabIndex === index })}
        >
          {label}
        </Styled.Button>
      ))}
    </Styled.Container>
  )
}

export default Tabs
