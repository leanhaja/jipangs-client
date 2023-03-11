import Icon from '../../../../../components/icon'

import * as Styled from './styled'

export default function Input() {
  return (
    <Styled.InputContainer>
      <Styled.IconWrapperLeft>
        <Icon iconName="search" />
      </Styled.IconWrapperLeft>
      <Styled.Input />
      <Styled.IconWrapperRight>
        <Icon iconName="x" />
      </Styled.IconWrapperRight>
    </Styled.InputContainer>
  )
}
