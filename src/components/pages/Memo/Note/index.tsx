import { useRef, useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

import { useModalContext } from '@/hooks/useModal';

import Button from '@/components/common/Button';
import ColorChip from '@/components/common/ColorChip';
import * as S from '@/components/pages/Memo/Note/styles';

const Note = (params: any) => {
  const { id, title, content } = params;
  const { openModal } = useModalContext();
  // openModal(<MBTITypes />, null, 'MBTI 선택')
  const titleRef = useRef(title);
  const contentRef = useRef(content);

  const [info, setInfo] = useState({
    method: id ? 'patch' : 'post',
    url: id ? `/boards/${id}` : '/boards',
    data: { title: '', content: '' }
  });

  return (
    <S.NoteFormContainer>
      <S.InputTitle
        type="text"
        placeholder="제목을 입력하세요."
        defaultValue={titleRef.current}
        ref={titleRef}
      />
      {/* TODO: 글자수 입력 제한 */}
      <S.InputContent
        placeholder="내용을 입력하세요."
        defaultValue={contentRef.current}
        ref={contentRef}
      />
      <Button
        classProp="w-full h-14 text-lg text-white bg-accent"
        onClick={() => {}}
      >
        <span>{'ESTJ'}</span>
        <FaExchangeAlt />
      </Button>
      <Button
        classProp="w-full h-14 text-lg text-white bg-primary"
        onClick={() => {
          openModal(<ColorChip />, null, '배경색상 선택');
        }}
      >
        <span>배경 색상</span>
        <S.MemoColor bg="bg-[#FF9D42]" />
      </Button>
      <Button classProp="w-full h-14 text-lg text-white bg-secondary">
        작성 완료
      </Button>
    </S.NoteFormContainer>
  );
};

export default Note;
