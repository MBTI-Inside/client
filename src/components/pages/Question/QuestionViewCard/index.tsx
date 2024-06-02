import * as S from '@/components/pages/Admin/Question/QuestionViewCard/styles';

const QuestionViewCard = () => {
  return (
    <S.QuestionViewCardContainer>
      <S.QuestionType>
        <div className="font-bold text-2xl">문항 유형</div>
        <div className="font-bold text-2xl">energy</div>
      </S.QuestionType>
      <S.TestQuestion>
        친구와 1시간이 넘는 통화를 마친 뒤 당신의 상태는?
      </S.TestQuestion>
      <S.AnswerSection>
        <S.AnswerCard>
          <div className="flex gap-2">
            <span>E</span>
            <span>75%</span>
          </div>
          <div>남은 얘기는 만나서 해야징</div>
        </S.AnswerCard>
        <S.AnswerCard>
          <div className="flex gap-2">
            <span>I</span>
            <span>25%</span>
          </div>
          <div>통화가 끝났으니 이제 쉬어야지..</div>
        </S.AnswerCard>
      </S.AnswerSection>
    </S.QuestionViewCardContainer>
  );
};

export default QuestionViewCard;
