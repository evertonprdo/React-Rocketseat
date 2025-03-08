import { globalStyles } from '@/styles/global'
import { AppProps } from 'next/app'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '@/styles/pages/app'
import Image from 'next/image'
globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Container>
         <Header>
            <Image
               src={logoImg}
               alt="logo"
            />
         </Header>

         <Component {...pageProps} />
      </Container>
   )
}
