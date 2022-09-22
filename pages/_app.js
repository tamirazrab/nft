import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

import { Navbar, Footer } from '../components'

function MyApp({ Component, pageProps }) {
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark min-h-screen bg-white">
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>

    <script src="https://kit.fontawesome.com/6e6b49243a.js" crossorigin="anonymous"></script>
  </ThemeProvider>
}

export default MyApp
