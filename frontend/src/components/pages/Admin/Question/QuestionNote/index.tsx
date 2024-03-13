import { useRef } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';

import Button from '@/components/common/Button';
import * as S from '@/components/pages/Admin/Question/QuestionNote/styles';

const QuestionNote = (params: any) => {
  const { id, question, answerTop, answerBottom } = params;

  const questionRef = useRef(question);
  const answerTopRef = useRef(answerTop);
  const answerBottomRef = useRef(answerBottom);

  return (
    <S.NoteContainer>
      <S.NoteHeader>
        <S.Title>{'Question'}</S.Title>
      </S.NoteHeader>
      <form className="flex-1">
        <S.InputTitle
          type="text"
          placeholder="제목"
          defaultValue={questionRef.current}
          ref={questionRef}
        />
        <S.InputContent
          placeholder="답변1"
          defaultValue={answerTopRef.current}
          ref={answerTopRef}
        />
        <S.InputContent
          placeholder="답변2"
          defaultValue={answerBottomRef.current}
          ref={answerBottomRef}
        />

        <>문항유형: E(energy)</>
        <>
          비중도: <S.InputTitle type="number" min="0" max="100" />%
        </>
        <Button classProp={'w-full h-14 text-lg text-white bg-inherit'}>
          작성 완료
        </Button>
      </form>
    </S.NoteContainer>
  );
};

export default QuestionNote;
