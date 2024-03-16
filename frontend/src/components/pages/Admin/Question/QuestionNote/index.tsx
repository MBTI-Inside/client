import { useRef, useState } from 'react';

import Button from '@/components/common/Button';
import * as S from '@/components/pages/Admin/Question/QuestionNote/styles';

const QuestionNote = (params: any) => {
  const { id, question, answerTop, answerBottom } = params;

  const questionRef = useRef<HTMLInputElement>(null);
  const answerTopRef = useRef<HTMLTextAreaElement>(null);
  const answerBottomRef = useRef<HTMLTextAreaElement>(null);

  const [rangeValue, setRangeValue] = useState(50);

  return (
    <S.NoteContainer>
      <S.NoteHeader>
        <S.Title>{'Question'}</S.Title>
      </S.NoteHeader>
      <S.InputForm>
        <S.InputFormControl>
          <S.InputTitle
            type="text"
            placeholder="제목"
            defaultValue={question ?? ''}
            ref={questionRef}
          />
        </S.InputFormControl>
        <S.InputFormControl className="flex flex-col gap-2">
          <S.InputContent
            placeholder="답변1"
            defaultValue={answerTop}
            ref={answerTopRef}
          />
          <S.InputContent
            placeholder="답변2"
            defaultValue={answerBottom}
            ref={answerBottomRef}
          />
        </S.InputFormControl>

        <S.InputFormControl>
          <div className="label">
            <span className="label-text text-white">문항유형</span>
          </div>
          <select className="select select-bordered">
            <option>E (energy)</option>
            <option>I (energy)</option>
            <option>S (awareness)</option>
            <option>N (awareness)</option>
            <option>T (judgement)</option>
            <option>F (judgement)</option>
            <option>J (life)</option>
            <option>P (life)</option>
          </select>
        </S.InputFormControl>
        <S.InputFormControl>
          <div className="label">
            <span className="label-text text-white">비중도</span>
            <span className="label-text-alt text-white">{rangeValue}%</span>
          </div>
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
        </S.InputFormControl>
        <S.InputFormControl>
          <Button classProp={'w-full h-14 text-lg text-white bg-inherit'}>
            작성 완료
          </Button>
        </S.InputFormControl>
      </S.InputForm>
    </S.NoteContainer>
  );
};

export default QuestionNote;
