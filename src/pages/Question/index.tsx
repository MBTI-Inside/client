import { Question } from '@/@types';
import axiosRequest from '@/api';
import { useCustomQuery } from '@/hooks';

import { useHandleError } from '@/hooks/useHandleError';

import QuestionCard from '@/components/pages/Question/QuestionCard';
import QuestionHeader from '@/components/pages/Question/QuestionHeader';

import * as S from '@/pages/Question/styles';

export interface QuestionProps {
  question: Question;
}

const QuestionList = () => {
  const setError = useHandleError(); // 에러 핸들링 함수

  const { data: questions } = useCustomQuery<Question[]>(['get-surveys'], {
    method: 'get',
    url: '/surveys',
    queryFn: () => axiosRequest.requestAxios<Question[]>('get', '/surveys'), // 함수를 반환하도록 수정
    options: {
      onError: (error) => {
        setError(error); // 에러가 발생하면 전역 에러 상태로 설정
      }
    }
  });

  // const getQuestionList = async () => {
  //   try {
  //     const response = await axiosRequest.requestAxios<Question[]>(
  //       'get',
  //       '/surveys' //?skip=0&limit=100' // sortType=desc&sortField=id
  //     );
  //     setQuestions(response);
  //   } catch (e) {
  //     console.log(e);
  //     throw e;
  //   }
  // };

  // TODO: 무한스크롤
  return (
    <S.QuestionContainer>
      <QuestionHeader />
      {questions?.map((question) => {
        return <QuestionCard key={question.createdAt} question={question} />;
      })}
      {/* TODO: Pagination 제거, 무한스크롤 적용 */}
      {/* <Pagination /> */}
    </S.QuestionContainer>
  );
};

export default QuestionList;
