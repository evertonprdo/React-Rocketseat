import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

export const theme = create({
   base: 'dark',
   fontBase: 'Roboto, sans-serif',
   fontCode: 'monospace',
   
   appBg: '#333',
   appContentBg: '#333',
   appPreviewBg: '#333',
})

addons.setConfig({
   theme,
})
