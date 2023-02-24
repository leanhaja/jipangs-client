import styled from '@emotion/styled'

import IconButton from '@/components/icon-button'

export const SearchTabContainer = styled.div`
  align-items: center;
  border-bottom: 2px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  padding: 0 16px 0 22px;
`

export const SearchButton = styled(IconButton)`
  ${({ theme }) => theme.buttonSizes.large};
`
