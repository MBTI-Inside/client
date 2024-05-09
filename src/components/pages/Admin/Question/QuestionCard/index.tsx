import Badge from '@/components/common/Badge';
import * as S from '@/components/pages/Admin/Question/QuestionCard/styles';

const QuestionCard = () => {
  return (
    <S.QuestionCardContainer>
      <S.QuestionTitle>
        <Badge content="energy" isClose={false} />
        <div className="line-clamp-2">
          바쁜 회사 생활을 보낸 당신. 황금 같은 주말을 어떻게 보내려고 할까?
        </div>
      </S.QuestionTitle>
      <S.QuestionDataGroup>
        <div className="badge">E</div>
        <span className="w-1/6 text-left">72%</span>
        <progress className="progress bg-slate-400" value={72} max={100} />
        <span className="w-1/6 text-right">28%</span>
        <div className="badge">I</div>
      </S.QuestionDataGroup>
    </S.QuestionCardContainer>
  );
};

export default QuestionCard;
