import type { Preview } from '@storybook/react'
import { theme } from './manager';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme
    }
  },
};

export default preview;
