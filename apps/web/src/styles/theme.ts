import { type Theme } from '@emotion/react'

const theme: Theme = {
  bottomNavigationHeight: '88px',
  buttonSizes: {
    large: {
      height: '44px',
      width: '44px',
    },
  },
  colors: {
    BLACK: '#000000',
    BOOKMARK_PURPLE: '#778bf7',
    BUTTON_GREEN: '#58B99D',
    CONTAINER_GREEN: '#E7F2E5',
    CONTAINER_ORANGE: '#F8ECDD',
    CONTAINER_RED: '#FBE6E5',
    CONTAINER_YELLOW: '#F3F3DE',
    DISABLED: '#D9D9D9',
    GREY1: '#F5F5F5',
    GREY2: '#E0E0E0',
    GREY3: '#BDBDBD',
    GREY4: '#7F7F7F',
    GREY5: '#2F2F2F',
    GREY6: '#EEEEEE',
    POINT_RED: '#EB4D3D',
    PRIMARY_BLUE: '#476BFF',
    PRIMARYCONTAINER_BLUE: '#F3F4FF',
    SCRIM: '#808080',
    TRANSPARENT_GRAY: '#F7F7F7',
    WHITE: '#FFFFFF',
    YELLOW_KAKAO: '#FEE500',
  },
  flexCenter: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  levels: {
    BACKGROUND: -100,
    BASE: 0,
    FOREGROUND: 100,
  },
  multilineEllipsis: {
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    display: '-webkit-box',
    overflow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
  },
  typographies: {
    btn1: {
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '100%',
    },
    c1: {
      fontSize: '9px',
      fontWeight: '400',
    },
    h1: {
      fontSize: '24px',
      fontWeight: '600',
      lineHeight: '100%',
    },
    h2: {
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '130%',
    },
    h3: {
      fontSize: '18px',
      fontWeight: '600',
      lineHeight: '130%',
    },
    h4: {
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '100%',
    },
    p1: {
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '100%',
    },
    p2: {
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '140%',
    },
    p3: {
      fontSize: '12px',
      fontWeight: '600',
      lineHeight: '140%',
    },
    p4: {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '140%',
    },
    p5: {
      fontSize: '11px',
      fontWeight: '400',
      lineHeight: '100%',
    },
  },
}

export default theme
