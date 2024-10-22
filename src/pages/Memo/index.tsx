import { MemoPost } from '@/@types';
import axiosRequest from '@/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useHandleError } from '@/hooks/useHandleError';

import Loading from '@/components/common/Loading';
import Card from '@/components/pages/Memo/Card';
import MemoHeader from '@/components/pages/Memo/MemoHeader';

import * as S from '@/pages/Memo/styles';

const Memo = () => {
  const setError = useHandleError(); // 에러 핸들링 함수

  const [limit] = useState(5);
  const [skip, setSkip] = useState(0);

  const {
    data: memos,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error
  } = useInfiniteQuery(
    ['get-memos'],
    () =>
      axiosRequest.requestAxios<MemoPost[]>(
        'get',
        `/memos?limit=${limit}&skip=${skip}`
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
  console.log(memos);

  return (
    <S.MemoContainer>
      <MemoHeader />
      {memos?.pages.map((page, pageIndex) => {
        return (
          <div
            key={pageIndex}
            className="flex flex-col gap-2 w-full justify-center items-center"
          >
            {page.map((data) => {
              return <Card key={data._id} memo={data} />;
            })}
          </div>
        );
      })}
      <div ref={ref}>{isFetchingNextPage && <Loading />}</div>
    </S.MemoContainer>
  );
};

export default Memo;
// 메모 목록을 보여줌
