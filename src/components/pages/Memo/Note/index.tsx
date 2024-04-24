import { useRef, useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

import Button from '@/components/common/Button';
import * as S from '@/components/pages/Memo/Note/styles';

const Note = (params: any) => {
  const { id, title, content } = params;
  //   const { openModal } = useModalContext();
  // openModal(<MBTITypes />, null, 'MBTI 선택')
  const titleRef = useRef(title);
  const contentRef = useRef(content);

  const [info, setInfo] = useState({
    method: id ? 'patch' : 'post',
    url: id ? `/boards/${id}` : '/boards',
    data: { title: '', content: '' }
  });

  return (
    <S.NoteContainer>
      {/* <S.NoteHeader>
        <S.Title>{'ESTJ'}</S.Title>
        <Button onClick={() => {}}>
          <FaExchangeAlt />
        </Button>
      </S.NoteHeader> */}
      <form className="flex flex-col w-full h-full justify-center gap-8">
        <S.InputTitle
          type="text"
          placeholder="제목"
          defaultValue={titleRef.current}
          ref={titleRef}
        />
        <S.InputContent
          placeholder="내용"
          defaultValue={contentRef.current}
          ref={contentRef}
        />
        <Button onClick={() => {}}>
          <span>{'ESTJ'}</span>
          <FaExchangeAlt />
        </Button>
        <Button classProp={'w-full h-14 text-lg text-white'}>
          <span>배경 색상</span>
          <S.MemoColor bg="bg-[#FF9D42]"></S.MemoColor>
        </Button>
        <Button classProp={'w-full h-14 text-lg text-white'}>작성 완료</Button>
      </form>
    </S.NoteContainer>
  );
};

export default Note;
