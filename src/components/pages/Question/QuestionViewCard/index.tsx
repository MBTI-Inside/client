import { Question } from '@/@types';

import * as S from '@/components/pages/Question/QuestionViewCard/styles';

interface QuestionProps {
  question: Question;
}

const QuestionViewCard = ({ question }: QuestionProps) => {
  const { mbtiType, subject, answer } = question;

  return (
    <S.QuestionViewCardContainer>
      <S.QuestionType>
        <div className="font-bold text-2xl">문항 유형</div>
        <div className="font-bold text-2xl">{mbtiType}</div>
      </S.QuestionType>
      <S.TestQuestion>{subject}</S.TestQuestion>
      <S.AnswerSection>
        {answer.map((answer) => {
          return (
            <S.AnswerCard key={answer.content + answer.type}>
              <div className="flex gap-2">
                <span>{answer.type}</span>
                <span>{answer.proportion}%</span>
              </div>
              <div>{answer.content}</div>
            </S.AnswerCard>
          );
        })}
      </S.AnswerSection>
    </S.QuestionViewCardContainer>
  );
};

export default QuestionViewCard;
