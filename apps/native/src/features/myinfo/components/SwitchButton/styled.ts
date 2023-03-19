import styled from '@emotion/native'

interface StyleProps {
  selected: boolean
}

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 16px;
`

export const Divider = styled.View`
  background-color: ${({ theme }) => theme.colors.GREY2};
  height: 18px;
  width: 1px;
`
export const Button = styled.Text<StyleProps>`
  color: ${({ selected, theme }) =>
    selected ? theme.colors.PRIMARY_BLUE : theme.colors.GREY2};
  font-family: 'Pretendard-SemiBold';
  font-size: 18px;
`
