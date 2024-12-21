import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'

import {
   Content,
   Overlay,
   CloseButton,
   TransactionType,
   TransactionTypeButton,
} from './styles'
import { useTransactionsSelector } from '../../transactions/hooks/context'

const newTransactionFormSchema = z.object({
   description: z.string(),
   price: z.number(),
   category: z.string(),
   type: z.enum(['income', 'outcome']),
})

type NewTransactionFormSchema = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
   const createTransaction = useTransactionsSelector('createTransaction')

   const {
      reset,
      control,
      register,
      handleSubmit,
      formState: { isSubmitting },
   } = useForm<NewTransactionFormSchema>({
      resolver: zodResolver(newTransactionFormSchema),
      defaultValues: {
         type: 'outcome',
      },
   })

   async function handleCreateNewTransaction(data: NewTransactionFormSchema) {
      const { description, price, category, type } = data
      await createTransaction({ description, price, category, type })
      reset()
   }

   return (
      <Dialog.Portal>
         <Overlay />

         <Content>
            <Dialog.Title>Nova transação</Dialog.Title>

            <CloseButton>
               <X size={24} />
            </CloseButton>

            <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
               <input
                  type="text"
                  placeholder="Descrição"
                  required
                  {...register('description')}
               />
               <input
                  type="number"
                  placeholder="Preço"
                  required
                  {...register('price', { valueAsNumber: true })}
               />
               <input
                  type="text"
                  placeholder="Categoria"
                  required
                  {...register('category')}
               />

               <Controller
                  control={control}
                  name="type"
                  render={({ field }) => (
                     <TransactionType
                        onValueChange={field.onChange}
                        value={field.value}
                     >
                        <TransactionTypeButton
                           value="income"
                           variant="income"
                        >
                           <ArrowCircleUp size={24} />
                           Entrada
                        </TransactionTypeButton>

                        <TransactionTypeButton
                           value="outcome"
                           variant="outcome"
                        >
                           <ArrowCircleDown size={24} />
                           Saída
                        </TransactionTypeButton>
                     </TransactionType>
                  )}
               />

               <button
                  type="submit"
                  disabled={isSubmitting}
               >
                  Cadastrar
               </button>
            </form>
         </Content>
      </Dialog.Portal>
   )
}
