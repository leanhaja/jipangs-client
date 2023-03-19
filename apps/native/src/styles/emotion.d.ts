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
      DIVIDER: string
      GREY1: string
      GREY2: string
      GREY3: string
      GREY4: string
      GREY5: string
      GREY6: string
      GREY7: string
      GREY8: string
      POINT_RED: string
      PRIMARYCONTAINER_BLUE: string
      PRIMARY_BLUE: string
      SCRIM: string
      TRANSPARENT_GRAY: string
      WHITE: string
      YELLOW_KAKAO: string
    }
    flexCenter: {
      alignItems: 'center'
      display: 'flex'
      justifyContent: 'center'
    }

    typographies: {
      btn1: {
        fontSize: number
        fontWeight: '600'
        lineHeight: number
      }
      c1: {
        fontSize: number
        fontWeight: '500'
        lineHeight: number
      }
      chip: {
        fontSize: number
        fontWeight: '500'
        lineHeight: number
      }
      h1: {
        fontSize: number
        fontWeight: '600'
        lineHeight: number
      }
      h2: {
        fontSize: number
        fontWeight: '600'
        lineHeight: number
      }
      h3: {
        fontSize: number
        fontWeight: '600'
        lineHeight: number
      }
      h4: {
        fontSize: number
        fontWeight: '500'
      }
      p1: {
        fontSize: number
        fontWeight: '400'
        lineHeight: number
      }
      p2: {
        fontSize: number
        fontWeight: '500'
        lineHeight: number
      }
      p3: {
        fontSize: number
        fontWeight: '600'
        lineHeight: number
      }
      p4: {
        fontSize: number
        fontWeight: '400'
        lineHeight: number
      }
      p5: {
        fontSize: number
        fontWeight: '400'
      }
    }
  }
}
