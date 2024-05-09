import Badge from '@/components/common/Badge';
import Pagination from '@/components/common/Pagination';
import QuestionCard from '@/components/pages/Admin/Question/QuestionCard';
import QuestionHeader from '@/components/pages/Admin/Question/QuestionHeader';

import * as S from '@/pages/Admin/Question/styles';

const QuestionList = () => {
  return (
    <S.QuestionContainer>
      <QuestionHeader />
      <section className="flex flex-col gap-2 w-11/12 p-2 rounded-2xl bg-white">
        <div className="flex gap-1">
          <Badge content="energy" isClose={false} />
          <div className="line-clamp-2">
            바쁜 회사 생활을 보낸 당신. 황금 같은 주말을 어떻게 보내려고 할까?
          </div>
        </div>
        <div className="flex w-full items-center gap-1">
          <div className="badge">E</div>
          <span className="w-1/6 text-left">72%</span>
          <progress className="progress bg-slate-400" value={72} max={100} />
          <span className="w-1/6 text-right">28%</span>
          <div className="badge">I</div>
        </div>
      </section>
      <Pagination />
    </S.QuestionContainer>
  );
};

export default QuestionList;
