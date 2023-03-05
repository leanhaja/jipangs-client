import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    bottomNavigationHeight: string
    btn1: {
      fontSize: string
      fontWeight: string
      lineHeight: string
    }
    buttonSizes: {
      large: {
        height: string
        width: string
      }
    }
    c1: {
      fontSize: string
      fontWeight: string
    }
    chip: {
      fontSize: string
      fontWeight: string
    }
    colors: {
      BLACK: string
      BOOKMARK_PURPLE: string
      BUTTON_GREEN: string
      CONTAINER_GREEN: string
      CONTAINER_ORANGE: string
      CONTAINER_RED: string
      CONTAINER_YELLOW: string
      DISABLED: string
      GREY1: string
      GREY2: string
      GREY3: string
      GREY4: string
      GREY5: string
      POINT_RED: string
      PRIMARYCONTAINER_BLUE: string
      PRIMARY_BLUE: string
      SCRIM: string
      TRANSPARENT_GRAY: string
      WHITE: string
    }
    flexCenter: {
      alignItems: 'center'
      display: 'flex'
      justifyContent: 'center'
    }
    h1: {
      fontSize: string
      fontWeight: string
      lineHeight: string
    }
    h2: {
      fontSize: string
      fontWeight: string
      lineHeight: string
    }
    h3: {
      fontSize: string
      fontWeight: string
      lineHeight: string
    }
    h4: {
      fontSize: string
      fontWeight: string
      lineHeight: string
    }
    multilineEllipsis: {
      WebkitBoxOrient: 'vertical'
      WebkitLineClamp: string
      display: string
      overflow: string
      textAlign: 'left'
      textOverflow: string
    }
    p1: {
      fontSize: string
      fontWeight: string
      lineHeight: string
    }
    p2: {
      fontSize: string
      fontWeight: string
      lineHeight: string
    }
    p3: {
      fontSize: string
      fontWeight: string
      lineHeight: string
    }
    p4: {
      fontSize: string
      fontWeight: string
      lineHeight: string
    }
    p5: {
      fontSize: string
      fontWeight: string
      lineHeight: string
    }
  }
}