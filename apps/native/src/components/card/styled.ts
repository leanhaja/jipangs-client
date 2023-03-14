import styled from '@emotion/native'

import IconButton from '../icon-button'

export interface StyledProps {
  bigSize: boolean
}

// box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
export const Article = styled.View`
  color: ${({ theme }) => theme.colors.GREY5};
  overflow: hidden;
  width: 100%;
`

export const Figure = styled.View<StyledProps>`
  aspect-ratio: ${({ bigSize }) => (bigSize ? '1.2211981' : '1.2189781')};
  background-color: rgba(47, 47, 47, 0.1);
  object-position: 50% 50%;
  overflow: hidden;
  position: relative;
`

export const Image = styled.Image`
  height: 100%;
  object-fit: cover;
  width: 100%;
`

export const ShareButton = styled(IconButton)<StyledProps>`
  background-color: ${({ theme }) => theme.colors.TRANSPARENT_GRAY};
  padding: ${({ bigSize }) => (bigSize ? '10px' : '6px')};
  position: absolute;
  right: ${({ bigSize }) => (bigSize ? '12px' : '8px')};
  top: ${({ bigSize }) => (bigSize ? '10px' : '8px')};
`

export const TagList = styled.View<StyledProps>`
  bottom: ${({ bigSize }) => (bigSize ? '10px' : '7px')};
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  width: 100%;
`

export const Tag = styled.Text<StyledProps>`
  ${({ bigSize, theme: { typographies } }) =>
    bigSize ? typographies.chip : typographies.c1}
  overflow: hidden;
  padding: 5px 12px;
`

export const Title = styled.Text<StyledProps>`
  margin-top: ${({ bigSize }) => (bigSize ? '16px' : '12px')};
  ${({ bigSize, theme: { typographies } }) =>
    bigSize ? typographies.h3 : typographies.p3};
`

export const Footer = styled.View<StyledProps>`
  align-items: center;
  flex-direction: row;
  height: ${({ bigSize }) => !bigSize && '36px'};
  justify-content: space-between;
  margin-top: ${({ bigSize }) => bigSize && '6px'};
  padding-right: ${({ bigSize }) => bigSize && '11px'};
`

export const Location = styled.Text<StyledProps>`
  ${({ bigSize, theme: { typographies } }) =>
    bigSize ? typographies.p2 : typographies.p5}
`
