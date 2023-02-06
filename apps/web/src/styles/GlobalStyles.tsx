import { Global, css } from '@emotion/react'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
            'Helvetica', 'Arial', sans-serif;
          display: flex;
          height: 100vh;
          align-items: center;
          justify-content: center;
        }
      `}
    />
  )
}
