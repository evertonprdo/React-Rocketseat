import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { CyclesContext } from '../../../contexts/CyclesContext'

export function NewCycleForm() {
   const { activeCycle } = useContext(CyclesContext)
   const { register } = useFormContext()

   return (
      <FormContainer>
         <label htmlFor="task">Vou trabalhar em</label>
         <TaskInput
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            disabled={!!activeCycle}
            {...register('task')}
         />

         <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
         </datalist>

         <label htmlFor="minutesAmount">Durante</label>
         <MinutesAmountInput
            placeholder="00"
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber: true })}
         />

         <span>minutos.</span>
      </FormContainer>
   )
}
