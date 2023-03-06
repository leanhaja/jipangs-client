import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    bottomNavigationHeight: string
    buttonSizes: {
      large: {
        height: string
        width: string
      }
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
      GREY6: string
      GREY7: string
      POINT_RED: string
      PRIMARYCONTAINER_BLUE: string
      PRIMARY_BLUE: string
      SCRIM: string
      TRANSPARENT_GRAY: string
      WHITE: string
      YELLOW_KAKAO: string
    }
    flexCenter: {
      'align-items': 'center'
      'justify-content': 'center'
    }
    levels: {
      BACKGROUND: number
      BASE: number
      FOREGROUND: number
    }
    multilineEllipsis: {
      WebkitBoxOrient: 'vertical'
      WebkitLineClamp: string
      display: string
      overflow: string
      textAlign: 'left'
      textOverflow: string
    }
    singlelineEllipsis: {
      overflow: string
      textOverflow: string
      'white-space': string
    }
    typographies: {
      btn1: {
        fontSize: string
        fontWeight: string
        lineHeight: string
      }
      c1: {
        fontSize: string
        fontWeight: string
      }
      chip: {
        fontSize: string
        fontWeight: string
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
}
