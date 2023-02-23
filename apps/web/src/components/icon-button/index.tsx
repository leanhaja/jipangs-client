import { PropsWithChildren } from 'react'

import * as Styled from './styled'

import Icon, { type IconName } from '@/components/icon'

export interface IconButtonProps {
  ariaLabel: string
  className?: string
  iconName: IconName
  onClick?: VoidFunction
  style?: React.CSSProperties
}

function IconButton({
  ariaLabel,
  children,
  className,
  iconName,
  onClick,
  style,
}: PropsWithChildren<IconButtonProps>) {
  return (
    <Styled.Button
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
      style={style}
      type="button"
    >
      <Icon iconName={iconName} />
      {children}
    </Styled.Button>
  )
}

export default IconButton
