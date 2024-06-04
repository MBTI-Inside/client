import useRouter from '@/hooks/useRouter';

import Button from '@/components/common/Button';
import Character from '@/components/common/Character';
import ResultDescription from '@/components/pages/Test/ResultDescription';
import ResultHeader from '@/components/pages/Test/ResultHeader';
import ResultStatistics from '@/components/pages/Test/ResultStatistics';
import ResultTypesRelations from '@/components/pages/Test/ResultTypesRelations';

import * as S from '@/pages/Test/Result/styles';

const TestResult = () => {
  const { navigateTo } = useRouter();
  return (
    <S.TestResultContainer color={'bg-[#DDAADD]'}>
      <ResultHeader />
      <Character bgcolor={'#AAFFAA'} gcolor={'#DDAADD'} />
      <ResultDescription />
      <ResultStatistics />
      <ResultTypesRelations />
      <S.Buttons>
        <Button
          classProp="w-80 h-14 text-lg bg-[#FFA500] hover:bg-gray-700 text-white border-none"
          onClick={() => navigateTo('/test')}
        >
          다시하기
        </Button>
        <Button
          classProp="w-80 h-14 text-lg bg-[#4CAF50] hover:bg-gray-700 text-white border-none"
          onClick={() => navigateTo('/stats')}
        >
          통계 보러가기
        </Button>
        <Button
          classProp="w-80 h-14 text-lg bg-[#32BEBE] hover:bg-gray-700 text-[#333333] border-none"
          onClick={() => navigateTo('/memo')}
        >
          담벼락 보러가기
        </Button>
      </S.Buttons>
    </S.TestResultContainer>
  );
};

export default TestResult;
