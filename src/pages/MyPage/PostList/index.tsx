import tw from 'tailwind-styled-components';

import Card from '@/components/pages/Memo/Card';
import MyHeader from '@/components/pages/MyPage/MyHeader';

const MyPostList = () => {
  // 임시 데이터
  const a = {
    title: 'Lorem Ipsum is simply dummy text of the printing',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    date: '3일 전',
    mbti: 'ESTJ',
    likeCount: 30,
    cmtCount: 2
  };

  return (
    <main className="flex flex-col w-full items-center gap-2">
      <MyHeader />
      {/* <MbtiTitleContainer>
        <MbtiTitle>
          <Title>MyMemoBTI</Title>
        </MbtiTitle>
      </MbtiTitleContainer> */}
      {/* TODO: 무한스크롤 */}
      <div className="flex flex-col gap-2">
        <Card {...a} />
        <Card {...a} />
        <Card {...a} />
        <Card {...a} />
      </div>
    </main>
  );
};

export default MyPostList;
// 내가 글작성한 목록을 보여줌

const MbtiTitleContainer = tw.div`
  flex 
  flex-col 
  items-center 
  p-3
w-full
`;
const MbtiTitle = tw.div`
  flex 
  w-full 
  justify-between
`;
const Title = tw.div`
text-4xl
text-white
font-bold
`;
