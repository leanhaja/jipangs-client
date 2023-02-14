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
          display: flex;
          height: 100vh;
          align-items: center;
          justify-content: center;
        }
        ${pretendard.style}
      `}
    />
  )
}
