import { Meta } from '@storybook/react';

import Alert from './index';

export default {
  title: 'components/common/Alert',
  component: Alert,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
} as Meta;

const Template = (args: any) => {
  return <Alert {...args} />;
};

export const DefaultAlert = Template.bind({});
