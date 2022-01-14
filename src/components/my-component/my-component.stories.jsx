import React from 'react'

export default {
  title: 'MyComponent',
  argTypes: {
    first: { control: 'text' },
    middle: { control: 'text' },
    last: { control: 'text' }
  },
};

const Template = (args) => <my-component {...args}></my-component>

export const Default = Template.bind({});
Default.args = {
  first: 'first',
  middle: 'middle',
  last: 'last',
};
