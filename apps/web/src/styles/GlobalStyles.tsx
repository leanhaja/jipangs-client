import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        body {
          align-items: center;
          display: flex;
          font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
            'Helvetica', 'Arial', sans-serif;
          height: 100vh;
          justify-content: center;
          margin: 0 auto;
          width: 375px;
        }

        #__next {
          align-items: center;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
          padding: 0 16px;
          width: 100%;
        }
      `}
    />
  )
}
