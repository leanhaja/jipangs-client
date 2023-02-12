import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

import GlobalStyles from '@/styles/GlobalStyles'
import theme from '@/styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
