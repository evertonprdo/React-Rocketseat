import './index.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { Router } from './Router'

export function App() {
   return (
      <ThemeProvider
         storageKey="pizza-shop-theme"
         defaultTheme="system"
      >
         <HelmetProvider>
            <Helmet titleTemplate="%s | pizza.shop" />
            <Toaster richColors />
            <Router />
         </HelmetProvider>
      </ThemeProvider>
   )
}
