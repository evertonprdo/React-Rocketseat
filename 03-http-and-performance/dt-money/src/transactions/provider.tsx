import { PropsWithChildren, useEffect, useState, useCallback } from 'react'

import {
   CreateTransactionInput,
   Transaction,
   TransactionContext,
} from './hooks/context'

import { api } from '../lib/axios'

export function TransactionsProvider({ children }: PropsWithChildren) {
   const [transactions, setTransactions] = useState<Transaction[]>([])

   const fetchTransactions = useCallback(async (query?: string) => {
      const response = await api.get('/transactions', {
         params: {
            q: query,
            _sort: 'createdAt',
            _order: 'desc',
         },
      })

      setTransactions(response.data)
   }, [])

   const createTransaction = useCallback(
      async (data: CreateTransactionInput) => {
         const { description, price, category, type } = data

         const response = await api.post('/transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date(),
         })

         setTransactions((state) => [...state, response.data])
      },
      [],
   )

   useEffect(() => {
      fetchTransactions()
   }, [fetchTransactions])

   return (
      <TransactionContext.Provider
         value={{ transactions, fetchTransactions, createTransaction }}
      >
         {children}
      </TransactionContext.Provider>
   )
}
