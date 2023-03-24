import styled from '@emotion/native'

import IconButton from '../../../../components/icon-button'

/* position: absolute; */
export const Container = styled.View`
  align-items: center;

  justify-content: center;
  top: 145px;
  width: 100%;
`

export const EmptyIcon = styled(IconButton)`
  transform: scale(2);
`

export const EmptyMessage = styled.Text`
  align-items: stretch;
  color: ${({ theme }) => theme.colors.GREY3};
  height: 300px;
  ${({ theme }) => theme.typographies.p2};
  margin-top: 44px;
  text-align: center;
  width: 100%;
`
