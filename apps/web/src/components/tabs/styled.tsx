import styled from '@emotion/styled'

export const Container = styled.div``

export const Button = styled.button`
  --bottom-line-width: 2px;

  ${({ theme }) => theme.h3};
  color: ${({ theme }) => theme.colors.GREY3};
  padding: 9.5px 12px;
  position: relative;

  &.active {
    color: ${({ theme }) => theme.colors.GREY5};
  }

  &.active::after {
    background-color: ${({ theme }) => theme.colors.GREY5};
    bottom: calc(-1 * var(--bottom-line-width));
    content: '';
    height: var(--bottom-line-width);
    left: 0;
    position: absolute;
    width: 100%;
  }
`
