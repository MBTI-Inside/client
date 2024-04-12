import { Meta, StoryObj } from '@storybook/react';

import Progress from './index';

const meta = {
  title: 'components/common/Progress',
  component: Progress,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultProgress: Story = {
  args: {
    color: 'custom-yellow',
    bgColor: 'bg-regal-purple',
    value: 40
  }
};
