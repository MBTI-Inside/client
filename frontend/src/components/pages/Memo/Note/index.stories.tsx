import type { Meta, StoryObj } from '@storybook/react';

import Note from '@/components/pages/Memo/Note';

const meta = {
  title: 'components/pages/Memo/Note',
  component: Note,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Note>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShortNote: Story = {
  args: {
    id: '',
    title: '따뜻한 얼음 ❄️ ',
    content: '차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다.'
  }
};

export const LongNote: Story = {
  args: {
    id: '',
    title:
      '따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ ',
    content:
      '차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. '
  }
};
