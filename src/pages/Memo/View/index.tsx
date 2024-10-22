import { MemoPost } from '@/@types';
import axiosRequest from '@/api';
import { useCustomQuery } from '@/hooks';

import useRouter from '@/hooks/useRouter';

import Comment from '@/components/pages/Memo/Comment';
import MemoViewContent from '@/components/pages/Memo/MemoViewContent';
import MemoViewHeader from '@/components/pages/Memo/MemoViewHeader';

const MemoView = () => {
  const { params } = useRouter();
  const { id } = params as { id: string };

  const { data: memo } = useCustomQuery(['get-memo'], {
    method: 'get',
    url: `/memos/${id}`, // sortType=desc&sortField=id
    queryFn: () => axiosRequest.requestAxios<MemoPost>('get', `/memos/${id}`)
  });

  console.log(memo);
  return (
    // TODO: 배경색 받아서 설정
    <div className="bg-green-700 flex flex-1 flex-col gap-4 items-center">
      <MemoViewHeader />
      {memo && <MemoViewContent memo={memo} />}
      <Comment />
    </div>
  );
};

export default MemoView;
// 메모 1개만 보여줌
