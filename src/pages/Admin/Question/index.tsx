import Badge from '@/components/common/Badge';
import Pagination from '@/components/common/Pagination';
import QuestionCard from '@/components/pages/Admin/Question/QuestionCard';
import QuestionHeader from '@/components/pages/Admin/Question/QuestionHeader';

import * as S from '@/pages/Admin/Question/styles';

const QuestionList = () => {
  return (
    <S.QuestionContainer>
      <QuestionHeader />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <Pagination />
    </S.QuestionContainer>
  );
};

export default QuestionList;
