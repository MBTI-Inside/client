import type { Meta, StoryObj } from '@storybook/react';

import QuestionNote from '@/components/pages/Question/QuestionNote';

const meta = {
  title: 'components/pages/Question/QuestionNote',
  component: QuestionNote,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof QuestionNote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShortQuestionNote: Story = {
  args: {
    id: '',
    question: '따뜻한 얼음 ❄️ ',
    answerTop: '차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다.',
    answerBottom: '차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다.'
  }
};

export const LongQuestionNote: Story = {
  args: {
    id: '',
    question:
      '따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ 따뜻한 얼음 ❄️ ',
    answerTop:
      '차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. ',
    answerBottom:
      '차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. 차가운데 따뜻하다. 속을 잘 모르겠다. 이제는 알고 싶다. '
  }
};