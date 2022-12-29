import '../styles/fontawesome.css'
// import '../styles/flex-slider.css'
import '../styles/vendor/bootstrap/css/bootstrap.css'
// import '../styles/Home.Module.css'
// import '../styles/owl.css'
// ort '../styles/tooplate-main.css'
import '../styles/global.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App