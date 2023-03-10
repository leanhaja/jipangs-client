import { Global, css } from '@emotion/react'
import localFont from '@next/font/local'
import emotionReset from 'emotion-reset'

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Thin.woff',
      weight: '100',
    },
    {
      path: '../../public/fonts/Pretendard-ExtraLight.woff',
      weight: '200',
    },
    {
      path: '../../public/fonts/Pretendard-Light.woff',
      weight: '300',
    },
    {
      path: '../../public/fonts/Pretendard-Regular.woff',
      weight: '400',
    },
    {
      path: '../../public/fonts/Pretendard-Medium.woff',
      weight: '500',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.woff',
      weight: '600',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.woff',
      weight: '700',
    },
    {
      path: '../../public/fonts/Pretendard-ExtraBold.woff',
      weight: '800',
    },
    {
      path: '../../public/fonts/Pretendard-Black.woff',
      weight: '900',
    },
  ],
})

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body {
          font-family: 'Pretendard', 'SF Pro Text', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        }

        #__next {
          height: 100vh;
        }

        :root {
          --device-max-width: 375px;
          --register-header-height: 74px;
        }

        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;

          &::before,
          &::after {
            box-sizing: border-box;
          }

          &::-webkit-scrollbar {
            display: none; // Chrome
          }
        }

        img {
          border: 0;
        }

        a {
          text-decoration: none;
        }

        input {
          background-color: transparent;
          background-image: none !important;
          border: 0;
        }

        button {
          cursor: pointer;
          user-select: none;
          background-color: transparent;
          border: 0;

          &:disabled {
            cursor: not-allowed;
          }
        }

        ${pretendard.style}
      `}
    />
  )
}
