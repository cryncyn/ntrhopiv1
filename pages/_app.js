import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(<>
  <header>
    <h1>greetings</h1>
    <nav>

    </nav>
  </header>
  <Component {...pageProps} />
  </>);
}

export default MyApp
