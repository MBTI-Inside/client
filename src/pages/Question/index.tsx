import { Question } from '@/@types';
import axiosRequest from '@/api';
import { useCustomQuery } from '@/hooks';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useHandleError } from '@/hooks/useHandleError';

import Loading from '@/components/common/Loading';
import QuestionCard from '@/components/pages/Question/QuestionCard';
import QuestionHeader from '@/components/pages/Question/QuestionHeader';

import * as S from '@/pages/Question/styles';

export interface QuestionProps {
  question: Question;
}

const QuestionList = () => {
  const setError = useHandleError(); // 에러 핸들링 함수

  const [limit] = useState(5);
  const [skip, setSkip] = useState(0);

  const {
    data: questions,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error
  } = useInfiniteQuery(
    ['get-surveys'],
    () =>
      axiosRequest.requestAxios<Question[]>(
        'get',
        `/surveys?limit=${limit}&skip=${skip}`
      ),
    {
      getNextPageParam: (lastPage, allPages) => {
        const totalFetchedItems = allPages.reduce(
          (acc, page) => acc + page.length,
          0
        );
        // 만약 서버에서 응답받은 데이터가 limit보다 적으면 다음 페이지가 없다고 판단
        return lastPage.length === limit ? totalFetchedItems : undefined;
      },
      refetchOnMount: false, // 컴포넌트가 다시 마운트될 때 데이터를 다시 요청하지 않음
      refetchOnWindowFocus: false, // 창에 포커스가 다시 맞춰질 때 데이터를 다시 요청하지 않음
      onError: (error: Error) => {
        setError(error);
      }
    }
  );

  const { ref, inView } = useInView({
    threshold: 1.0,
    triggerOnce: false
  });

  // 요소가 뷰포트에 보이면 fetchNextPage 호출
  if (inView && hasNextPage && !isFetchingNextPage) {
    setSkip((prev) => prev + 5);
    fetchNextPage();
  }

  return (
    <S.QuestionContainer>
      <QuestionHeader />
      {questions?.pages.map((page, pageIndex) => {
        return (
          <div key={pageIndex} className="flex flex-col gap-2 w-full">
            {page.map((data) => {
              return <QuestionCard key={data._id} question={data} />;
            })}
          </div>
        );
      })}
      <div ref={ref}>{isFetchingNextPage && <Loading />}</div>
    </S.QuestionContainer>
  );
};

export default QuestionList;
