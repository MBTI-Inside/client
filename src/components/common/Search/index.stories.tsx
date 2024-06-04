import { Meta, StoryObj } from '@storybook/react';

import Search from './index';

const meta = {
  title: 'components/common/Search',
  component: Search,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSearch: Story = {
  args: {
    useFullTypes: true
  }
};
