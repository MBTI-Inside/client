import Button from '@/components/common/Button';
import Character from '@/components/common/Character';
import ResultDescription from '@/components/pages/Test/ResultDescription';
import ResultHeader from '@/components/pages/Test/ResultHeader';
import ResultStatistics from '@/components/pages/Test/ResultStatistics';
import ResultTypesRelations from '@/components/pages/Test/ResultTypesRelations';

import * as S from '@/pages/Test/Result/styles';

const TestResult = () => {
  return (
    <S.TestResultContainer color={'bg-[#DDAADD]'}>
      <ResultHeader />
      <Character bgcolor={'#AAFFAA'} gcolor={'#DDAADD'} />
      <ResultDescription />
      <ResultStatistics />
      <ResultTypesRelations />
      <S.Buttons>
        <Button classProp="w-full h-12 text-lg bg-black text-white border-none">
          다시하기
        </Button>
        <Button classProp="w-full h-12 text-lg bg-black text-white border-none">
          통계 보러가기
        </Button>
        <Button classProp="w-full h-12 text-lg bg-black text-white border-none">
          담벼락 보러가기
        </Button>
      </S.Buttons>
    </S.TestResultContainer>
  );
};

export default TestResult;
