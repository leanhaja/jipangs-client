import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

import Layout from '@/components/layout'
import GlobalStyles from '@/styles/GlobalStyles'
import theme from '@/styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
