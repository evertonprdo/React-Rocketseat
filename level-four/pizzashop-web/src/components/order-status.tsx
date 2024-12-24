import { cn } from '@/lib/utils'

export type OrderStatus =
   | 'pending'
   | 'canceled'
   | 'processing'
   | 'delivering'
   | 'delivered'

interface Props {
   status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string[]> = {
   pending: ['Pendente', 'bg-slate-400'],
   canceled: ['Cancelado', 'bg-rose-500'],
   delivered: ['Entregue', 'bg-emerald-500'],
   delivering: ['Em entrega', 'bg-amber-500'],
   processing: ['Em preparo', 'bg-amber-500'],
}

export function OrderStatus({ status }: Props) {
   return (
      <div className="flex-items-center gap-2">
         <div
            className={cn(
               'mr-2 inline-block h-2 w-2 rounded-full',
               orderStatusMap[status][1],
            )}
         />
         <span className="font-medium text-muted-foreground">
            {orderStatusMap[status][0]}
         </span>
      </div>
   )
}
