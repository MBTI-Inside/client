import * as S from '@/components/pages/Admin/Question/QuestionCard/styles';

const QuestionCard = () => {
  return (
    <S.CardContainer>
      <S.MBTIBadge>E</S.MBTIBadge>
      <div className="line-clamp-2">
        바쁜 회사 생활을 보낸 당신. 황금 같은 주말을 어떻게 보내려고 할까?
      </div>
      <div className="w-8">76%</div>
    </S.CardContainer>
  );
};

export default QuestionCard;
