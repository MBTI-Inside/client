import type { Meta, StoryObj } from '@storybook/react';

import Alert from './index';

const meta = {
  title: 'components/common/Alert',
  component: Alert,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAlert: Story = {
  args: {}
};
