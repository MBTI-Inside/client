import tw from 'tailwind-styled-components';

import Button from '@/components/common/Button';
import Character from '@/components/common/Character';
import ResultDescription from '@/components/pages/Test/ResultDescription';
import ResultHeader from '@/components/pages/Test/ResultHeader';
import ResultStatistics from '@/components/pages/Test/ResultStatistics';
import ResultTypesRelations from '@/components/pages/Test/ResultTypesRelations';

const TestResult = () => {
  return (
    <TestResultContainer style={{ backgroundColor: '#DDAADD' }}>
      <ResultHeader />
      <Character bgcolor={'#AAFFAA'} gcolor={'#DDAADD'} />
      <ResultDescription />
      <ResultStatistics />
      <ResultTypesRelations />

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
