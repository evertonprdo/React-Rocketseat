import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@prdo-learning/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://media.licdn.com/dms/image/v2/D4E03AQGtc-BYjfRZZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731770748788?e=1741219200&v=beta&t=loHGWvwxiIme9dJtO2q7ZRsHwgEm-bvzD0Y-1x2Nefk',
    alt: 'avatar',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
