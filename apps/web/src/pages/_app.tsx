import type { AppProps } from 'next/app'

import Layout from '@/components/layout'
import GlobalStyles from '@/styles/GlobalStyles'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
