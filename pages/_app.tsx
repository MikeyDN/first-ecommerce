import '../styles/fontawesome.css'
import '../styles/vendor/bootstrap/css/bootstrap.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/global.css'

import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
        <Component {...pageProps} />

    </AnimatePresence>
  )
}

export default App