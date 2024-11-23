import { MemoPost } from '@/@types';
import axiosRequest from '@/api';
import { useCustomQuery } from '@/hooks';

import useRouter from '@/hooks/useRouter';

import Comment from '@/components/pages/Memo/Comment';
import MemoViewContent from '@/components/pages/Memo/MemoViewContent';
import MemoViewHeader from '@/components/pages/Memo/MemoViewHeader';

import { MemoViewWrapper } from './styles';

const MemoView = () => {
  const { params } = useRouter();
  const { id } = params as { id: string };

  const { data: memo } = useCustomQuery(['get-memo'], {
    method: 'get',
    url: `/memos/${id}`, // sortType=desc&sortField=id
    queryFn: () => axiosRequest.requestAxios<MemoPost>('get', `/memos/${id}`)
  });

  return (
    <MemoViewWrapper cardColor={memo?.cardColor}>
      {memo && <MemoViewHeader memo={memo} />}
      {memo && <MemoViewContent memo={memo} />}
      <Comment />
    </MemoViewWrapper>
  );
};

export default MemoView;
// 메모 1개만 보여줌
