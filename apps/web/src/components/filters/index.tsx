import classNames from 'classnames'

import * as Styled from './styled'

export interface FilterButton {
  key: string
  label: string
  onClick?: VoidFunction
}

export interface FiltersProps {
  buttons: FilterButton[]
  containerType?: React.ElementType
  onFilterChange?: (key: string) => void
  selectedFilterKey?: string
  style?: React.CSSProperties
}

function Filters({
  buttons,
  containerType,
  onFilterChange,
  selectedFilterKey,
  style,
}: FiltersProps) {
  const onFilterClick = (key: string, onClick?: VoidFunction) => {
    onClick?.()
    onFilterChange?.(key)
  }

  return (
    <Styled.Container as={containerType} style={style}>
      {buttons.map(({ key, label, onClick }, index) => (
        <Styled.Button
          key={`${label}-${index + 1}`}
          onClick={() => {
            onFilterClick(key, onClick)
          }}
          className={classNames({ active: selectedFilterKey === key })}
        >
          <span>{label}</span>
        </Styled.Button>
      ))}
    </Styled.Container>
  )
}

export default Filters
