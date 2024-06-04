import Card from '@/components/pages/Memo/Card';
import MyHeader from '@/components/pages/MyPage/MyHeader';

import * as S from '@/pages/MyPage/PostList/styles';

const MyPostList = () => {
  // 임시 데이터
  const a = {
    id: 236547,
    title: 'Lorem Ipsum is simply dummy text of the printing',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    date: '3일 전',
    mbti: 'ESTJ',
    likeCount: 30,
    cmtCount: 2
  };

  return (
    <S.MyPostListContainer>
      <MyHeader title={'내 MemoBTI'} />
      {/* TODO: 무한스크롤 */}
      <S.MyCardContainer>
        <Card memo={a} />
        <Card memo={a} />
        <Card memo={a} />
        <Card memo={a} />
      </S.MyCardContainer>
    </S.MyPostListContainer>
  );
};

export default MyPostList;
// 내가 글작성한 목록을 보여줌
