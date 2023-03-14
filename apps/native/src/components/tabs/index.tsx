import * as Styled from './styled'

export interface TabButton {
  label: string
  onClick?: VoidFunction
}

export interface TabsProps {
  buttons: TabButton[]
  onTabChange?: (index: number) => void
  selectedTabIndex?: number
}

function Tabs({ buttons, onTabChange, selectedTabIndex = 0 }: TabsProps) {
  const onTabClick = (index: number, onClick?: VoidFunction) => {
    onClick?.()
    onTabChange?.(index)
  }

  return (
    <Styled.View>
      {buttons.map(({ label, onClick }, index) => (
        <Styled.Button
          key={`${label}-${index + 1}`}
          onPress={() => {
            onTabClick(index, onClick)
          }}
        >
          <Styled.Text isSelected={selectedTabIndex === index}>
            {label}
          </Styled.Text>
        </Styled.Button>
      ))}
    </Styled.View>
  )
}

export default Tabs
