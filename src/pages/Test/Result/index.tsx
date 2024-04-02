import tw from 'tailwind-styled-components';

import Button from '@/components/common/Button';
import Character from '@/components/common/Character';
import ResultDescription from '@/components/pages/Test/ResultDescription';
import ResultHeader from '@/components/pages/Test/ResultHeader';
import ResultStatistics from '@/components/pages/Test/ResultStatistics';

const TestResult = () => {
  return (
    <TestResultContainer style={{ backgroundColor: '#DDAADD' }}>
      <ResultHeader />
      <Character bgcolor={'#AAFFAA'} gcolor={'#DDAADD'} />
      <ResultDescription />
      <ResultStatistics />
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
      <Buttons>
        <Button>다시하기</Button>
        <Button>통계 보러가기</Button>
        <Button>담벼락 보러가기</Button>
      </Buttons>
    </TestResultContainer>
  );
};

export default TestResult;
// 테스트 결과를 보여줌

export const TestResultContainer = tw.section`
flex
flex-col
w-full

flex-1
justify-center
items-center
gap-12
`;

export const Buttons = tw.div`
flex
flex-col
w-5/6
gap-4
mb-4
`;

export const GoodBadContainer = tw.div`
flex
flex-col
items-center
px-4
text-black
bg-white
rounded-xl
w-5/6
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
