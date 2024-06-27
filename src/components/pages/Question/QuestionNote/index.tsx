import { Question } from '@/@types/Question';
import axiosRequest from '@/api';
import { MBTI_TYPES_OPTIONS } from '@/constants';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

import Button from '@/components/common/Button';
import * as S from '@/components/pages/Question/QuestionNote/styles';

import { MBTI_OPTIONS_DATA } from '@/constants/MBTIOptions';

interface QuestionNoteProps {
  id?: string;
}

const QuestionNote = ({ id }: QuestionNoteProps) => {
  const [question, setQuestion] = useState<Question | null>(null);

  const getQuestion = async (id: string) => {
    try {
      const response = await axiosRequest.requestAxios<Question>(
        'get',
        `/survey/questions/${id}`
      );
      setQuestion(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (id) {
      getQuestion(id);
    }
  }, [id]);

  const [mbtiTypesOption, setMBTITypesOption] =
    useState<keyof typeof MBTI_OPTIONS_DATA>('energy');
  const [mbtiTypes, setMBTITypes] = useState<string[]>(
    MBTI_OPTIONS_DATA['energy']
  );
  const questionRef = useRef<HTMLInputElement>(null);
  const answerTopRef = useRef<HTMLTextAreaElement>(null);
  const answerBottomRef = useRef<HTMLTextAreaElement>(null);
  const [rangeValue, setRangeValue] = useState(50);

  useEffect(() => {
    if (question) {
      setMBTITypesOption(question.mbtiType);
      setMBTITypes(MBTI_OPTIONS_DATA[question.mbtiType]);
      setRangeValue(question.answer[0].proportion);
    }
  }, [question]);

  useEffect(() => {
    setMBTITypes(MBTI_OPTIONS_DATA[mbtiTypesOption]);
  }, [mbtiTypesOption]);

  const saveQuestion = async () => {
    // TODO: 좀 더 효율적으로 유효성 검사 관리를 할 수 있을 것 같음.
    if (
      !questionRef.current?.value ||
      !answerTopRef.current?.value ||
      !answerBottomRef.current?.value
    ) {
      return;
    }

    const questionData = {
      subject: questionRef.current.value,
      answer: [
        {
          type: mbtiTypes[0],
          content: answerTopRef.current.value,
          proportion: rangeValue
        },
        {
          type: mbtiTypes[1],
          content: answerBottomRef.current.value,
          proportion: 100 - rangeValue
        }
      ],
      mbtiType: mbtiTypesOption
    };

    const res = await axiosRequest.requestAxios<Question>(
      id ? 'put' : 'post',
      id ? `/survey/questions/${id}` : '/survey/questions',
      questionData
    );
    console.log(res);
  };

  return (
    <S.NoteContainer>
      <section>
        <div className="label">
          <span className="label-text text-white">문항유형</span>
        </div>
        <select
          className="select select-bordered w-full"
          value={mbtiTypesOption}
          onChange={(e) =>
            setMBTITypesOption(e.target.value as keyof typeof MBTI_OPTIONS_DATA)
          }
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
        defaultValue={question?.subject ?? ''}
        ref={questionRef}
      />
      <S.InputContent
        className="textarea-primary"
        placeholder="답변1"
        defaultValue={question?.answer[0].content ?? ''}
        ref={answerTopRef}
      />
      <S.InputContent
        className="textarea-secondary"
        placeholder="답변2"
        defaultValue={question?.answer[1].content ?? ''}
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
        onClick={() => saveQuestion()}
      >
        작성 완료
      </Button>
    </S.NoteContainer>
  );
};

export default QuestionNote;
