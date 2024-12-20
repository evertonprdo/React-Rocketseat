import styled from 'styled-components'

export const TransactionContainer = styled.main`
   width: 100%;
   max-width: 1120px;
   margin: 4rem auto 0;
   padding-inline: 1.5rem;
`
export const TransactionsTable = styled.table`
   width: 100%;
   border-collapse: separate;
   border-spacing: 0 0.5rem;
   margin-top: 1.5rem;

   td {
      padding: 1.25rem 2rem;
      background: ${({ theme }) => theme['gray-700']};

      &:first-child {
         border-top-left-radius: 6px;
         border-bottom-left-radius: 6px;
      }

      &:last-child {
         border-top-right-radius: 6px;
         border-bottom-right-radius: 6px;
      }
   }
`

interface PriceHighlightProps {
   variant: keyof typeof priceVariantHighlighMap
}

const priceVariantHighlighMap = {
   income: 'green-300',
   outcome: 'red-300',
} as const

export const PriceHighlight = styled.span<PriceHighlightProps>`
   color: ${({ variant, theme }) => theme[priceVariantHighlighMap[variant]]};
`
