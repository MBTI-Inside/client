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
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-white">문항유형</span>
              <span className="label-text-alt">Alt label</span>
            </div>
            <select className="select select-bordered">
              <option disabled selected>
                MBTI 선택
              </option>
              <option>E (energy)</option>
              <option>I (energy)</option>
              <option>S (awareness)</option>
              <option>N (awareness)</option>
              <option>T (judgement)</option>
              <option>F (judgement)</option>
              <option>J (life)</option>
              <option>P (life)</option>
            </select>
          </label>
        </div>
        <div>
          <div>비중도</div>
          <input
            type="range"
            min={0}
            max="100"
            value="40"
            className="range range-primary"
            step="1"
          />
        </div>
        <Button classProp={'w-full h-14 text-lg text-white bg-inherit'}>
          작성 완료
        </Button>
      </form>
    </S.NoteContainer>
  );
};

export default QuestionNote;
