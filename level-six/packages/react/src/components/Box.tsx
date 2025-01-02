import { ElementType } from 'react'
import { styled } from '../styles'
import { ComponentProps } from '@stitches/react'

const StitchesBox = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export type BoxProps = ComponentProps<typeof StitchesBox> & {
  as?: ElementType
}

export function Box({ children, ...props }: BoxProps) {
  return <StitchesBox {...props}>{children}</StitchesBox>
}
