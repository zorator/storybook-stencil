import { addDecorator } from '@storybook/html';
import renderToStaticMarkup from './decorators/renderToStaticMarkup.js';

addDecorator(renderToStaticMarkup);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
