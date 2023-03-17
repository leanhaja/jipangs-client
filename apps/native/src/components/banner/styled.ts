import styled from '@emotion/native'

export const Container = styled.View<{ size: 'big' | 'small' }>`
  background-color: ${({ theme }) => theme.colors.PRIMARYCONTAINER_BLUE};
  border-radius: 8px;
  height: ${({ size }) => (size === 'big' ? '190px' : '105px')};
  padding: ${({ size }) => (size === 'big' ? '40px 36px 0' : '17px 17px 0')};
`
export const SubTitle = styled.Text`
  ${({ theme }) => theme.typographies.p2};
  margin-bottom: 8px;
`
export const Tag = styled.Text`
  ${({ theme }) => theme.typographies.chip};
  background-color: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.PRIMARY_BLUE};
  overflow: hidden;
  padding: 5px 12px;
`
export const TagWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 6px;
`

export const Title = styled.Text<{ size: 'big' | 'small' }>`
  text-align: left;
  ${({ size, theme: { typographies } }) =>
    size === 'big' ? typographies.h2 : typographies.h3};
`
