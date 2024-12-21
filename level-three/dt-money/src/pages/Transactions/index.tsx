import {
   PriceHighlight,
   TransactionContainer,
   TransactionsTable,
} from './styles'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import { useTransactionsSelector } from '../../transactions/hooks/context'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
   const transactions = useTransactionsSelector('transactions')

   return (
      <div>
         <Header />
         <Summary />

         <TransactionContainer>
            <SearchForm />

            <TransactionsTable>
               <tbody>
                  {transactions.map((transaction) => (
                     <tr key={transaction.id}>
                        <td width="50%">{transaction.description}</td>
                        <td>
                           <PriceHighlight variant={transaction.type}>
                              {transaction.type === 'outcome' && '- '}
                              {priceFormatter.format(transaction.price)}
                           </PriceHighlight>
                        </td>
                        <td>{transaction.category}</td>
                        <td>
                           {dateFormatter.format(
                              new Date(transaction.createdAt),
                           )}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </TransactionsTable>
         </TransactionContainer>
      </div>
   )
}
