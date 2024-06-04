import Card from '@/components/pages/Memo/Card';
import MemoHeader from '@/components/pages/Memo/MemoHeader';

import * as S from '@/pages/Memo/styles';

const Memo = () => {
  const memo = {
    id: 134178,
    title: 'Lorem Ipsum is simply dummy text of the printing',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    date: '3일 전',
    mbti: 'ESTJ',
    likeCount: 30,
    cmtCount: 2
  };

  return (
    <S.MemoContainer>
      <MemoHeader />
      <Card memo={memo} />
      <Card memo={memo} />
      <Card memo={memo} />
      <Card memo={memo} />
      <Card memo={memo} />
      <Card memo={memo} />
      <Card memo={memo} />
      <Card memo={memo} />
    </S.MemoContainer>
  );
};

export default Memo;
// 메모 목록을 보여줌
