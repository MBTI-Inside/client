import useRouter from '@/hooks/useRouter';

import Badge from '@/components/common/Badge';
import * as S from '@/components/pages/Question/QuestionCard/styles';

import { QuestionProps } from '@/pages/Question';

const QuestionCard = ({ question }: QuestionProps) => {
  const { navigateTo } = useRouter();

  // 구조 분해
  const { id, subject, answer, mbtiType, createdAt } = question;

  // 왼쪽, 오른쪽 응답 데이터
  const [left, right] = answer;

  return (
    <S.QuestionCardContainer onClick={() => navigateTo(`/question/${id}`)}>
      <S.QuestionTitle>
        <Badge content={mbtiType} isClose={false} />
        <div className="line-clamp-2">{subject}</div>
      </S.QuestionTitle>
      <S.QuestionDataGroup>
        <div className="badge">{left.type}</div>
        <span className="w-1/6 text-left">{left.proportion}%</span>
        <progress
          className="progress bg-slate-400"
          value={left.proportion}
          max={100}
        />
        <span className="w-1/6 text-right">{right.proportion}%</span>
        <div className="badge">{right.type}</div>
      </S.QuestionDataGroup>
    </S.QuestionCardContainer>
  );
};

export default QuestionCard;
