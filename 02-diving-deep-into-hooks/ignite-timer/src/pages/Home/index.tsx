import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { HandPalm, Play } from '@phosphor-icons/react'

import {
   HomeContainer,
   StartCountdownButton,
   StopCountdownButton,
} from './styles'

import { Countdown } from './Countdown'
import { NewCycleForm } from './NewCycleForm'

import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormSchema = z.object({
   task: z.string().min(1, 'Informe a tarefa'),
   minutesAmount: z
      .number()
      .min(5, 'O ciclo precisa ser de no mínimo 5s')
      .max(60, 'O ciclo precisa ser de no máximo 60s'),
})

type NewCycleFormSchema = z.infer<typeof newCycleFormSchema>

export function Home() {
   const { createNewCycle, interruptCurrentCycle, activeCycle } =
      useContext(CyclesContext)

   const newCycleForm = useForm<NewCycleFormSchema>({
      resolver: zodResolver(newCycleFormSchema),
      defaultValues: {
         task: '',
         minutesAmount: 0,
      },
   })

   const { watch, handleSubmit, reset } = newCycleForm

   function handleCreateNewCycle(data: NewCycleFormSchema) {
      createNewCycle(data)
      reset()
   }

   const task = watch('task')
   const isSubmitDisabled = !task

   return (
      <HomeContainer>
         <form
            onSubmit={handleSubmit(handleCreateNewCycle)}
            action=""
         >
            <FormProvider {...newCycleForm}>
               <NewCycleForm />
            </FormProvider>

            <Countdown />

            {activeCycle ? (
               <StopCountdownButton
                  onClick={interruptCurrentCycle}
                  type="button"
               >
                  <HandPalm size={24} />
                  Interromper
               </StopCountdownButton>
            ) : (
               <StartCountdownButton
                  disabled={isSubmitDisabled}
                  type="submit"
               >
                  <Play size={24} />
                  Começar
               </StartCountdownButton>
            )}
         </form>
      </HomeContainer>
   )
}
