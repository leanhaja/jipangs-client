import styled from '@emotion/native'

export const View = styled.View`
  flex-direction: row;
`

/* --bottom-line-width: 2px; */
/* color: ${({ theme }) => theme.colors.GREY3}; */
/* ${({ theme }) => theme.typographies.h3}; */
/* height: 44px; */
/* padding: 9.5px 12px; */
/* position: relative; */

/* &.active::after {
    background-color: ${({ theme }) => theme.colors.GREY5};
    bottom: calc(-1 * var(--bottom-line-width));
    content: '';
    height: var(--bottom-line-width);
    left: 0;
    position: absolute;
    width: 100%;
  } */
export const Button = styled.Pressable``

export const Text = styled.Text<{ isSelected?: boolean }>`
  color: ${({ theme }) => theme.colors.GREY3};
`

// TODO: 폰트 적용되면 스타일 점검
