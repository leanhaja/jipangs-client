import styled from '@emotion/styled'

import IconButton from '@/components/icon-button'

export const Article = styled.article`
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  color: ${({ theme }) => theme.colors.GREY5};
  overflow: hidden;
  padding-bottom: 23px;
  width: 100%;
`

export const Figure = styled.figure`
  aspect-ratio: 167 / 88;
  background-color: rgba(47, 47, 47, 0.1);
  overflow: hidden;
  position: relative;
`

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
`

export const ShareButton = styled(IconButton)`
  background-color: ${({ theme }) => theme.colors.TRANSPARENT_GRAY};
  border-radius: 50%;
  padding: 6px;
  position: absolute;
  right: 8px;
  top: 8px;

  svg {
    transform: scale(0.8);
  }
`

export const Title = styled.h3`
  ${({ theme }) => theme.multilineEllipsis};
  ${({ theme }) => theme.typographies.p3};
  padding: 12px 10px;
`
