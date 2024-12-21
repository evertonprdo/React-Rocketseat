import {
   createContext,
   useContext,
   useContextSelector,
} from 'use-context-selector'

export interface Transaction {
   id: string
   description: string
   type: 'income' | 'outcome'
   price: number
   category: string
   createdAt: string
}

export interface CreateTransactionInput {
   description: string
   price: number
   category: string
   type: 'income' | 'outcome'
}

interface TransactionContextType {
   transactions: Transaction[]
   fetchTransactions: (query: string) => Promise<void>
   createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionContext = createContext<TransactionContextType | null>(
   null,
)

export function useTransactionsSelector<T extends keyof TransactionContextType>(
   param: T,
): TransactionContextType[T] {
   const context = useContextSelector(TransactionContext, (context) => {
      if (context === null) {
         throw new Error(
            `"useTransactionsSelector" must be wrapped in a <TransactionsProvider/>`,
         )
      }

      return context[param]
   })

   return context
}

export function useTransactions() {
   const context = useContext(TransactionContext)

   if (context === null) {
      throw new Error(
         `"useTransactions" must be wrapped in a <TransactionsProvider/>`,
      )
   }

   return context
}
