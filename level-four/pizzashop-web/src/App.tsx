import './index.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { queryClient } from './lib/react-query'
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

            <QueryClientProvider client={queryClient}>
               <Router />
            </QueryClientProvider>
         </HelmetProvider>
      </ThemeProvider>
   )
}
