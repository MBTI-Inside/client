import Badge from '@/components/common/Badge';
import Pagination from '@/components/common/Pagination';
import QuestionCard from '@/components/pages/Admin/Question/QuestionCard';
import QuestionHeader from '@/components/pages/Admin/Question/QuestionHeader';

import * as S from '@/pages/Admin/Question/styles';

const QuestionList = () => {
  return (
    <S.QuestionContainer>
      <QuestionHeader />
      <section className="w-5/6">
        <div className="bg-white">
          <div className="flex">
            <Badge content="energy" />
            <div className="line-clamp-2">
              바쁜 회사 생활을 보낸 당신. 황금 같은 주말을 어떻게 보내려고 할까?
            </div>
          </div>
          <div>
            <div
              className="    flex 
    w-full
    items-center"
            >
              <div className="badge">E</div>
              <span className="w-1/6 text-left">72%</span>
              <progress
                className="progress bg-slate-400"
                value={72}
                max={100}
              />
              <span className="w-1/6 text-right">28%</span>
              <div className="badge">I</div>
            </div>
          </div>
        </div>

        <div></div>
      </section>
      <S.QuestionSection>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <Pagination />
      </S.QuestionSection>
    </S.QuestionContainer>
  );
};

export default QuestionList;

// 특정 테스트에 대해 문항들을 목록으로 보여준다.
// 문항을 클릭하여 상세 페이지로 이동한다.
