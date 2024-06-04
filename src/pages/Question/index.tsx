import Pagination from '@/components/common/Pagination';
import QuestionCard from '@/components/pages/Question/QuestionCard';
import QuestionHeader from '@/components/pages/Question/QuestionHeader';

import * as S from '@/pages/Question/styles';

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
