import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

import { Transactions } from './pages/Transactions'
import { TransactionsProvider } from './transactions/provider'

export function App() {
   return (
      <ThemeProvider theme={defaultTheme}>
         <GlobalStyle />

         <TransactionsProvider>
            <Transactions />
         </TransactionsProvider>
      </ThemeProvider>
   )
}
