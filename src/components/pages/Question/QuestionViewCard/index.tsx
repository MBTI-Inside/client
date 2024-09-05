import { Question } from '@/@types';

import * as S from '@/components/pages/Question/QuestionViewCard/styles';

// import { QuestionProps } from '../QuestionCard';

// TODO: undefined 타입 제거
interface QuestionProps {
  question: Question | undefined;
}

const QuestionViewCard = ({ question }: QuestionProps) => {
  // TODO: 구조 분해 할당 (현재 오류 발생 - undefined)
  // const { mbtiType, answer } = question;
  // const [left, right] = answer;

  return (
    <S.QuestionViewCardContainer>
      <S.QuestionType>
        <div className="font-bold text-2xl">문항 유형</div>
        <div className="font-bold text-2xl">{question?.mbtiType}</div>
      </S.QuestionType>
      <S.TestQuestion>{question?.subject}</S.TestQuestion>
      <S.AnswerSection>
        <S.AnswerCard>
          <div className="flex gap-2">
            <span>{question?.answer[0].type}</span>
            <span>{question?.answer[0].proportion}%</span>
          </div>
          <div>{question?.answer[0].content}</div>
        </S.AnswerCard>
        <S.AnswerCard>
          <div className="flex gap-2">
            <span>{question?.answer[1].type}</span>
            <span>{question?.answer[1].proportion}%</span>
          </div>
          <div>{question?.answer[1].content}</div>
        </S.AnswerCard>
      </S.AnswerSection>
    </S.QuestionViewCardContainer>
  );
};

export default QuestionViewCard;
