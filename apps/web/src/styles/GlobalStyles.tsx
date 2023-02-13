import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        body {
          align-items: center;
          font-family: 'Pretendard', 'SF Pro Text', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          display: flex;
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

        @font-face {
          font-family: 'Pretendard';
          src: url('/fonts/Pretendard-Thin.woff');
          font-weight: 100;
        }
        @font-face {
          font-family: 'Pretendard';
          src: url('/fonts/Pretendard-ExtraLight.woff');
          font-weight: 200;
        }
        @font-face {
          font-family: 'Pretendard';
          src: url('/fonts/Pretendard-Light.woff');
          font-weight: 300;
        }
        @font-face {
          font-family: 'Pretendard';
          src: url('/fonts/Pretendard-Regular.woff');
          font-weight: 400;
        }
        @font-face {
          font-family: 'Pretendard';
          src: url('/fonts/Pretendard-Medium.woff');
          font-weight: 500;
        }
        @font-face {
          font-family: 'Pretendard';
          src: url('/fonts/Pretendard-SemiBold.woff');
          font-weight: 600;
        }
        @font-face {
          font-family: 'Pretendard';
          src: url('/fonts/Pretendard-Bold.woff');
          font-weight: 700;
        }
        @font-face {
          font-family: 'Pretendard';
          src: url('/fonts/Pretendard-ExtraBold.woff');
          font-weight: 800;
        }
        @font-face {
          font-family: 'Pretendard';
          src: url('/fonts/Pretendard-Black.woff');
          font-weight: 900;
        }
      `}
    />
  )
}
