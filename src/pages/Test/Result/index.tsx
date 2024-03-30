import tw from 'tailwind-styled-components';

import Button from '@/components/common/Button';
import Character from '@/components/common/Character';

const TestResult = () => {
  return (
    <Container style={{ backgroundColor: '#DDAADD' }}>
      <Header>
        <Title>mbti?.name</Title>
        <Button>결과 공유하기</Button>
      </Header>
      <Main>
        <MainTop>
          <Character bgcolor={'#AAFFAA'} gcolor={'#DDAADD'} />
          <ContentWrapper style={{ backgroundColor: '#DDAADD' }}>
            <ContentTitle>mbti?.summary / mbti?.name</ContentTitle>
            <Content>mbti?.content?.description</Content>
            <HashTags>
              <HashTag>text=mbti?.tag[1]</HashTag>
              <HashTag>text=mbti?.tag[1]</HashTag>
              <HashTag>text=mbti?.tag[1]</HashTag>
              <HashTag>text=mbti?.tag[1]</HashTag>
            </HashTags>
          </ContentWrapper>
        </MainTop>
        <MainBottom style={{ backgroundColor: '#DDAADD' }}>
          <TypePercentageBarContainer>
            <TypePercentageBarTitle>내 검사 결과</TypePercentageBarTitle>
            {/* <TypePercentageBar
              title="에너지"
              textColor="text-red-500"
              barColor="bg-red-500"
              result={energy}
            /> */}

            <TPContainer>
              <TPTitle>title</TPTitle>
              <TPMain>
                <TPTop>
                  <span>result[t1]%</span>
                  <TPBarBackground>
                    <div className={`h-3`} style={{ width: `40%` }}></div>
                  </TPBarBackground>
                  <span>result[t2]%</span>
                </TPTop>
                <TPBottom>
                  <span>t1</span>
                  <span>t2</span>
                </TPBottom>
              </TPMain>
            </TPContainer>

            {/* <TypePercentageBar
              title="인식"
              textColor="text-orange-500"
              barColor="bg-orange-500"
              result={awareness}
            />
            <TypePercentageBar
              title="본성"
              textColor="text-green-500"
              barColor="bg-green-500"
              result={judgement}
            />
            <TypePercentageBar
              title="전술"
              textColor="text-purple-500"
              barColor="bg-purple-500"
              result={life}
            /> */}
          </TypePercentageBarContainer>

          <GoodBadContainer>
            <GoodBadTitle>유형별 관계성</GoodBadTitle>
            <GoodType>
              <TypeTitle>잘 어울리는 유형</TypeTitle>
              <Mbti>❤️good?.name❤️</Mbti>
              <Contents>good?.description</Contents>
            </GoodType>
            <BadType>
              <TypeTitle>친해지기 힘든 유형</TypeTitle>
              <Mbti>❄️bad?.name❄️</Mbti>
              <Contents>bad?.description</Contents>
            </BadType>
          </GoodBadContainer>
        </MainBottom>
      </Main>
      <Buttons>
        <Button classProp="w-full h-14">다시하기</Button>
        <Button>통계 보러가기</Button>
        <Button>담벼락 보러가기</Button>
      </Buttons>
    </Container>
  );
};

export default TestResult;
// 테스트 결과를 보여줌

export const Container = tw.section`
flex
flex-col
w-full

flex-1
justify-center
items-center
gap-12
`;

export const Header = tw.header`
w-full
flex
justify-between
items-center
p-4
pb-6
`;

export const Title = tw.h3`
font-bold
text-5xl
text-white
`;

export const ShareButton = tw.button`
bg-black
text-white
text-xl
font-bold
cursor-pointer
rounded-3xl
py-2
px-4
`;

export const Main = tw.section`
w-full
`;

export const MainTop = tw.div`
w-full
`;

export const CharacterImg = tw.div`
w-[390px]
h-[342px]
bg-test
`;

export const ContentWrapper = tw.div`
bg-[#0272f1]
py-5
px-10
pb-20
text-center
relative
bottom-5
text-white
`;

export const ContentTitle = tw.h5`
text-2xl
font-bold
mb-6
`;

export const Content = tw.div`
text-xl
mb-6
`;

export const HashTags = tw.ul`
list-none
grid
grid-cols-2
place-items-center
`;

export const MainBottom = tw.section`
w-full
relative
bottom-5
bg-[#ffdf3f]
pt-10
px-5
`;

export const Buttons = tw.div`
flex
flex-col
w-full
gap-4
`;

export const HashTag = tw.li`
rounded-3xl
bg-white
text-black
text-base
w-32
mt-5
p-2
opacity-40
`;

export const GoodBadContainer = tw.div`
flex
flex-col
items-center
px-4
text-black
bg-white
rounded-xl
`;
export const GoodBadTitle = tw.h5`
text-3xl
font-bold
py-6
`;
export const GoodType = tw.div`
mt-2
mb-6
bg-pink-100
rounded-lg
p-4
`;
export const BadType = tw.div`
mb-8
bg-blue-100
rounded-lg
p-4
`;
export const TypeTitle = tw.p`
text-lg
text-center
font-bold
mb-2
`;
export const Mbti = tw.p`
text-base
text-center
font-bold
mb-2
`;
export const Contents = tw.div`
w-full
`;

export const TypePercentageBarContainer = tw.div`
w-full
bg-white
rounded-xl
px-2
pb-4
mb-10
`;
export const TypePercentageBarTitle = tw.div`
font-bold
text-3xl
text-black
text-center
py-6
`;

export const TPContainer = tw.div`
text-center
text-black
p-2
`;
export const TPTitle = tw.div`
font-bold
text-xl
`;
export const TPMain = tw.div`
w-full
`;
export const TPTop = tw.div`
flex
justify-between
font-bold
items-center
gap-2
`;
export const TPBottom = tw.div`
flex
justify-between
`;
export const TPBarBackground = tw.div`
bg-gray-100
h-3
w-full
rounded-3xl
overflow-hidden
`;
