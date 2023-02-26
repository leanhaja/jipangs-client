import styled from '@emotion/styled'

import IconButton from '@/components/icon-button'

export const Article = styled.article`
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.GREY5};
  min-width: 200px;
  padding: 0 16px 10px;
  width: 100%;
`

export const Figure = styled.figure`
  aspect-ratio: 1.6 / 1;
  background-color: rgba(47, 47, 47, 0.1);
  border-radius: 8px 8px 0 0;
  margin: 0 -16px;
  position: relative;
`

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: top;
  vertical-align: top;
  width: 100%;
`

export const Share = styled(IconButton)`
  /* background-color: rgba(245, 245, 245, 0.8);
  border-radius: 50%;
  height: 40px;
  padding: 10px;
  position: absolute;
  right: 12px;
  top: 10px;
  width: 40px; */
`

export const TagList = styled.ul`
  bottom: 8px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
`

export const Tag = styled.li`
  background-color: ${({ theme }) => theme.colors.CONTAINER_RED};
  border-radius: 50px;
  font-size: 12px;
  line-height: 14px;
  margin-left: 12px;
  padding: 4px 8px;

  &:last-child {
    background-color: ${({ theme }) => theme.colors.TRANSPARENT_GRAY};
    margin-right: 12px;
  }
`

export const Title = styled.h3`
  ${({ theme }) => theme.h3};
  ${({ theme }) => theme.multilineEllipsis};
`

export const Footer = styled.footer`
  ${({ theme }) => theme.p2};
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
`
