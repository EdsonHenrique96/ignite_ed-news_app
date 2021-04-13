import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

/**
 * É re-redenderizado toda vez que mudar de rota.
 */