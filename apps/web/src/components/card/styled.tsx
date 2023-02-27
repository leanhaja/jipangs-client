import styled from '@emotion/styled'

import IconButton from '@/components/icon-button'

export const Article = styled.article`
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  color: ${({ theme }) => theme.colors.GREY5};
  overflow: hidden;
  width: 100%;

  &.big {
    border-radius: 8px;
  }

  &.small {
    border-radius: 4px;
  }
`

// TODO: box-shadow 논의 필요

export const Figure = styled.figure`
  background-color: rgba(47, 47, 47, 0.1);
  overflow: hidden;
  position: relative;

  .big & {
    aspect-ratio: 265 / 217;
  }

  .small & {
    aspect-ratio: 167 / 137;
  }
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
  position: absolute;

  .big & {
    padding: 10px;
    right: 12px;
    top: 10px;
  }

  .small & {
    padding: 6px;
    right: 8px;
    top: 8px;

    svg {
      transform: scale(0.8);
    }
  }
`

export const TagList = styled.ul`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;

  .big & {
    bottom: 10px;
  }

  .small & {
    bottom: 7px;
  }
`

export const Tag = styled.li`
  background-color: ${({ theme }) => theme.colors.CONTAINER_RED};
  border-radius: 50px;
  padding: 5px 12px;

  &:last-child {
    background-color: ${({ theme }) => theme.colors.TRANSPARENT_GRAY};
  }

  .big & {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin-left: 12px;

    &:last-child {
      margin-right: 12px;
    }
  }

  .small & {
    ${({ theme }) => theme.c1};
    margin-left: 8px;

    &:last-child {
      margin-right: 8px;
    }
  }
`

export const Title = styled.h3`
  ${({ theme }) => theme.multilineEllipsis};

  .big & {
    ${({ theme }) => theme.h3};
    margin-top: 16px;
  }

  .small & {
    ${({ theme }) => theme.p3};
    margin-top: 12px;
  }
`

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;

  button path {
    fill: ${({ theme }) => theme.colors.BOOKMARK_PURPLE};
  }

  .big & {
    ${({ theme }) => theme.p2};
    margin-top: 6px;
    padding-right: 11px;
  }

  .small & {
    height: 36px;
    ${({ theme }) => theme.p5};

    button {
      transform: scale(0.9);
    }
  }
`
