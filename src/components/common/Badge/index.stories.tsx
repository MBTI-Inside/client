import { Meta, StoryObj } from '@storybook/react';

import Badge, { BadgeProps } from './index';

const meta = {
  title: 'components/common/Badge',
  component: Badge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBadge: Story = {
  args: {
    content: '제목: 우산'
  }
};
