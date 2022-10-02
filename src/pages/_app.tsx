import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { GlobalStyle } from '../styles/global'
import { Providers } from '../providers'
import { motion } from 'framer-motion'
import { Provider as UrlqlProvider } from 'urql'
import { client, ssrCache } from '../libs/urql'

function MyApp({ Component, pageProps, router }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <Providers>
      <UrlqlProvider value={client}>
        <motion.div
          key={router.route}
          initial="init"
          animate="opacityAnimation"
          variants={{
            init: {
              opacity: 0
            },
            opacityAnimation: {
              opacity: 1
            }
          }}
          transition={{
            delay: 0.2
          }}
        >
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider>
        </motion.div>
      </UrlqlProvider>

      <GlobalStyle />
    </Providers>
  )
}

export default MyApp
