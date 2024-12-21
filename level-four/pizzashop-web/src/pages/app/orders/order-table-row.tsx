import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export function OrderTableRow() {
   return (
      <TableRow>
         <TableCell>
            <Dialog>
               <DialogTrigger asChild>
                  <Button
                     variant="outline"
                     size="xs"
                  >
                     <Search className="h-3 w-3" />
                     <span className="sr-only">Detalhes do pedido</span>
                  </Button>
               </DialogTrigger>

               <OrderDetails />
            </Dialog>
         </TableCell>

         <TableCell className="font-mono text-xs font-medium">
            q231rrq213qwr
         </TableCell>

         <TableCell className="text-muted-foreground">Há 15 minutes</TableCell>

         <TableCell>
            <div className="flex-items-center gap-2">
               <div className="mr-2 inline-block h-2 w-2 rounded-full bg-slate-400" />
               <span className="font-medium text-muted-foreground">
                  Pendente
               </span>
            </div>
         </TableCell>

         <TableCell className="font-medium">Diego Schell Fernandes</TableCell>

         <TableCell className="font-medium">R$ 149,98</TableCell>

         <TableCell>
            <Button
               variant="outline"
               size="xs"
            >
               <ArrowRight className="mr-2 h-3 w-3" />
               Aprovar
            </Button>
         </TableCell>

         <TableCell>
            <Button
               variant="ghost"
               size="xs"
            >
               <X className="mr-2 h-3 w-3" />
               Cancelar
            </Button>
         </TableCell>
      </TableRow>
   )
}
