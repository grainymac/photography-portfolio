import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Expletus_Sans } from '@next/font/google'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
