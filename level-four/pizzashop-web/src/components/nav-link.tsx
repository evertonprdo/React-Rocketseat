import { LinkProps, NavLink as RRNavLink } from 'react-router'

import { cn } from '@/lib/utils'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
   return (
      <RRNavLink
         className={({ isActive }) =>
            cn(
               'flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground',
               isActive && 'text-foreground',
            )
         }
         {...props}
      />
   )
}
