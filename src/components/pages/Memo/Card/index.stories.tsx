import type { Meta, StoryObj } from '@storybook/react';

import Card, { CardProps } from './index';

const meta: Meta<CardProps> = {
  title: 'components/pages/Memo/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    memo: {
      // 'memo' 속성을 사용하여 CardProps를 전달합니다.
      title: { control: 'text' },
      content: { control: 'text' },
      date: { control: 'text' }, // TODO: 날짜 타입에 맞게 수정하세요.
      mbti: { control: 'text' },
      likeCount: { control: 'number' },
      cmtCount: { control: 'number' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    memo: {
      // 'memo' 속성을 사용하여 CardProps를 전달합니다.
      id: 1,
      title: '따뜻한 얼음 ❄️ ',
      content: '차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다.',
      date: '3일 전',
      mbti: 'ESTJ',
      likeCount: 30,
      cmtCount: 2
    }
  }
};

export const LongCard: Story = {
  args: {
    memo: {
      // 'memo' 속성을 사용하여 CardProps를 전달합니다.
      id: 2,
      title: 'Lorem Ipsum is simply dummy text of the printing',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      date: '3일 전',
      mbti: 'ESTJ',
      likeCount: 30,
      cmtCount: 2
    }
  }
};
