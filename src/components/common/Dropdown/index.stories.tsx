// Dropdown.stories.tsx
import { Meta, StoryObj } from '@storybook/react';

import Dropdown from '@/components/common/Dropdown';

// Dropdown 컴포넌트의 정확한 경로를 지정하세요.

const meta: Meta<typeof Dropdown> = {
  title: 'components/common/Dropdown', // 스토리북에서 보여줄 경로와 타이틀
  component: Dropdown,
  parameters: {
    layout: 'centered' // 컴포넌트를 스토리북 뷰의 중앙에 배치
  },
  tags: ['autodocs'], // 문서 자동 생성 태그
  argTypes: {
    // props의 각종 특성을 정의할 수 있습니다. 필요에 따라 구성하세요.
    items: {
      control: 'object',
      description: 'Items to display in the dropdown' // 각 아이템에 대한 설명
    }
    // 추가적인 props에 대한 설정이 필요할 경우 이곳에 작성합니다.
  }
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultDropdown: Story = {
  args: {
    items: [
      { id: 1111, label: 'data1', onClick: () => alert('Data 1 selected') },
      { id: 2222, label: 'data2', onClick: () => alert('Data 2 selected') }
    ]
  }
};
