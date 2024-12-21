import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { MagnifyingGlass } from '@phosphor-icons/react'

import { SearchFormContainer } from './styles'
import { useTransactionsSelector } from '../../../../transactions/hooks/context'

const searchFormSchema = z.object({
   query: z.string(),
})

type SearchFormSchema = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
   const fetchTransactions = useTransactionsSelector('fetchTransactions')

   const {
      register,
      handleSubmit,
      formState: { isSubmitting },
   } = useForm<SearchFormSchema>({
      resolver: zodResolver(searchFormSchema),
   })

   async function handleSearchTransactions(data: SearchFormSchema) {
      await fetchTransactions(data.query)
   }

   return (
      <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
         <input
            type="text"
            placeholder="Busque por transações"
            {...register('query')}
         />

         <button
            type="submit"
            disabled={isSubmitting}
         >
            <MagnifyingGlass size={20} />
            Buscar
         </button>
      </SearchFormContainer>
   )
}

export const SearchForm = memo(SearchFormComponent)
