import styled from '@emotion/styled'

export const Container = styled.div``

export const Button = styled.button`
  --padding-inline: 12px;

  ${({ theme }) => theme.typographies.btn1};
  color: ${({ theme }) => theme.colors.GREY3};
  height: 44px;
  padding: 9.5px var(--padding-inline);

  position: relative;

  &.active {
    color: ${({ theme }) => theme.colors.GREY5};
  }

  &:not(:last-of-type) span {
    position: relative;

    &::after {
      background-color: ${({ theme }) => theme.colors.GREY3};
      content: '';
      height: 100%;
      position: absolute;
      right: calc(-1 * var(--padding-inline));
      width: 1.5px;
    }
  }
`
