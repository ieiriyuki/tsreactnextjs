import type { Preview } from '@storybook/react'

export const parameters = {
  viewport: {
    viewports: {
      iphonex: {
        name: 'iPhone X',
        styles: {
          width: '375px',
          height: '812px',
        },
      },
    },
  },
  backgrounds: {
    values: [
      {
        name: 'grey',
        value: '#808080',
      },
    ],
  },
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}
//
export default preview
