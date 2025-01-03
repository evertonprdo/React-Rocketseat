import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@prdo-learning/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Box element test</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: 'check',
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
