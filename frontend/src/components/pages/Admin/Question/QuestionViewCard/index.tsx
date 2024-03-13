import * as S from '@/components/pages/Admin/Question/QuestionViewCard/styles';

const QuestionViewCard = () => {
  return (
    <S.QuestionViewCardContainer>
      <section>
        <S.TestQuestion>
          친구와 1시간이 넘는 통화를 마친 뒤 당신의 상태는?
        </S.TestQuestion>
      </section>
      <S.AnswerSection>
        <S.AnswerCard>남은 얘기는 만나서 해야징</S.AnswerCard>
        <S.AnswerCard>통화가 끝났으니 이제 쉬어야지..</S.AnswerCard>
      </S.AnswerSection>
      <S.QuestionType>
        <div className="font-bold text-2xl">문항 유형</div>
        <div className="font-bold text-2xl">E(energy)</div>
      </S.QuestionType>
      <S.TypeRate>
        <div className="font-bold text-lg">비중도</div>
        <S.Progress value="73" max="100"></S.Progress>
        <div className="font-bold text-lg">73%</div>
      </S.TypeRate>
    </S.QuestionViewCardContainer>
  );
};

export default QuestionViewCard;
