import styled from '@emotion/native'

import IconButton from '../icon-button'

export const Article = styled.View`
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  color: ${({ theme }) => theme.colors.GREY5};
  overflow: hidden;
  width: 100%;
`

export const Figure = styled.View`
  aspect-ratio: 167 / 88;
  background-color: rgba(47, 47, 47, 0.1);
  overflow: hidden;
  position: relative;
`

export const Image = styled.Image`
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
`

export const ShareButton = styled(IconButton)`
  background-color: ${({ theme }) => theme.colors.TRANSPARENT_GRAY};
  padding: 6px;
  position: absolute;
  right: 8px;
  top: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => theme.typographies.p3};
  padding: 12px 10px;
`
