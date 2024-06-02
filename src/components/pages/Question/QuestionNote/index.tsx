import { useRef, useState } from 'react';

import Button from '@/components/common/Button';
import * as S from '@/components/pages/Question/QuestionNote/styles';

const QuestionNote = (params: any) => {
  const { id, question, answerTop, answerBottom } = params;

  const questionRef = useRef(question);
  const answerTopRef = useRef(answerTop);
  const answerBottomRef = useRef(answerBottom);

  const [rangeValue, setRangeValue] = useState(50);

  return (
    <S.NoteContainer>
      <section>
        <div className="label">
          <span className="label-text text-white">문항유형</span>
        </div>
        <select className="select select-bordered w-full">
          <option>energy</option>
          <option>awareness</option>
          <option>judgement</option>
          <option>life</option>
        </select>
      </section>
      <S.InputTitle
        type="text"
        placeholder="제목을 입력하세요."
        defaultValue={questionRef.current}
        ref={questionRef}
      />
      <S.InputContent
        className="textarea-primary"
        placeholder="답변1"
        defaultValue={answerTopRef.current}
        ref={answerTopRef}
      />
      <S.InputContent
        className="textarea-secondary"
        placeholder="답변2"
        defaultValue={answerBottomRef.current}
        ref={answerBottomRef}
      />
      <section className="flex flex-col gap-2">
        <div className="label">
          <span className="label-text text-white">비중도</span>
        </div>
        <div className="flex justify-between items-center bg-white p-2 gap-2 rounded-full">
          <span className="w-2">E</span>
          <span className="flex items-center w-full">
            <input
              type="range"
              min="0"
              max="100"
              value={rangeValue}
              className="range range-primary"
              style={{ backgroundColor: 'none' }}
              step="1"
              onChange={(e) => setRangeValue(Number(e.target.value))}
            />
          </span>
          <span>50%</span>
        </div>
        <div className="flex justify-between items-center bg-white p-2 gap-2 rounded-full">
          <span className="w-2">I</span>
          <span className="flex items-center w-full">
            <input
              type="range"
              min="0"
              max="100"
              value={rangeValue}
              className="range range-secondary"
              style={{ backgroundColor: 'none' }}
              step="1"
              onChange={(e) => setRangeValue(Number(e.target.value))}
            />
          </span>
          <span>50%</span>
        </div>
      </section>

      <Button classProp={'w-full h-14 text-lg text-white bg-accent'}>
        작성 완료
      </Button>
    </S.NoteContainer>
  );
};

export default QuestionNote;
