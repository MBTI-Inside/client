import Comment from '@/components/pages/Memo/Comment';
import MemoViewContent from '@/components/pages/Memo/MemoViewContent';
import MemoViewHeader from '@/components/pages/Memo/MemoViewHeader';

const MemoView = () => {
  // 임시 데이터
  const a = {
    title: 'Lorem Ipsum is simply dummy text of the printing',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    date: '2024-04-26 13:55:21',
    mbti: 'ESTJ',
    like_count: 30,
    cmt_count: 2,
    userName: '언정차'
  };
  return (
    // TODO: 배경색 받아서 설정
    <div className="bg-green-700 flex flex-1 flex-col gap-4 items-center">
      <MemoViewHeader />
      <MemoViewContent data={a} />
      <Comment />
    </div>
  );
};

export default MemoView;
// 메모 1개만 보여줌
