import type {Preview} from "@storybook/react";
import '../src/root/tailwind.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'custom-dark',
      values: [
        {
          name: 'custom-dark',
          value: '#0d0d0d'
        }
      ]
    }
  },
};

export default preview;
