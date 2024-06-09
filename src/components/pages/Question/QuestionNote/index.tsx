import { MBTI_TYPES_OPTIONS } from '@/constants';
import { useEffect, useRef, useState } from 'react';

import Button from '@/components/common/Button';
import * as S from '@/components/pages/Question/QuestionNote/styles';

import { MBTI_OPTIONS_DATA } from '@/constants/MBTIOptions';

const QuestionNote = (params: any) => {
  const { id, question, answerTop, answerBottom } = params;
  const text = '123asdf';
  console.log(question, answerTop, answerBottom);

  const [mbtiTypesOption, setMBTITypesOption] =
    useState<keyof typeof MBTI_OPTIONS_DATA>('Energy');

  const [mbtiTypes, setMBTITypes] = useState<string[]>(
    MBTI_OPTIONS_DATA[mbtiTypesOption]
  );
  const questionRef = useRef<HTMLInputElement>(null);
  const answerTopRef = useRef<HTMLTextAreaElement>(null);
  const answerBottomRef = useRef<HTMLTextAreaElement>(null);

  const [rangeValue, setRangeValue] = useState(50);

  useEffect(() => {
    setMBTITypes(MBTI_OPTIONS_DATA[mbtiTypesOption]);
  }, [mbtiTypesOption]);

  const saveQuestion = () => {
    console.log('제목 : ' + questionRef.current?.value);
    console.log('답변1 : ' + answerTopRef.current?.value);
    console.log('답변2 : ' + answerBottomRef.current?.value);
    console.log('비중도 : ' + rangeValue);
  };

  return (
    <S.NoteContainer>
      <section>
        <div className="label">
          <span className="label-text text-white">문항유형</span>
        </div>
        <select
          className="select select-bordered w-full"
          onChange={(e) => {
            setMBTITypesOption(
              e.target.value as keyof typeof MBTI_OPTIONS_DATA
            );
          }}
        >
          {MBTI_TYPES_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </section>
      <S.InputTitle
        type="text"
        placeholder="제목을 입력하세요."
        value={question}
        ref={questionRef}
      />
      <S.InputContent
        className="textarea-primary"
        placeholder="답변1"
        value={answerTop}
        ref={answerTopRef}
      />
      <S.InputContent
        className="textarea-secondary"
        placeholder="답변2"
        value={answerBottom}
        ref={answerBottomRef}
      />
      <section className="flex flex-col gap-2">
        <div className="label">
          <span className="label-text text-white">비중도</span>
        </div>
        <div className="flex justify-between items-center bg-white p-2 gap-2 rounded-full">
          <span className="w-2">{mbtiTypes[0]}</span>
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
          <span className="w-8">{rangeValue}%</span>
        </div>
        <div className="flex justify-between items-center bg-white p-2 gap-2 rounded-full">
          <span className="w-2">{mbtiTypes[1]}</span>
          <span className="flex items-center w-full">
            <input
              type="range"
              min="0"
              max="100"
              value={100 - rangeValue}
              className="range range-secondary"
              style={{ backgroundColor: 'none' }}
              step="1"
              onChange={(e) => setRangeValue(Number(e.target.value))}
            />
          </span>
          <span className="w-8">{100 - rangeValue}%</span>
        </div>
      </section>

      <Button
        classProp="w-full h-14 text-lg text-white bg-accent"
        onClick={() => {
          saveQuestion();
        }}
      >
        작성 완료
      </Button>
    </S.NoteContainer>
  );
};

export default QuestionNote;
