import { MBTI } from '@/@types';
import axiosRequest from '@/api';
import { useCustomQuery } from '@/hooks';

import useRouter from '@/hooks/useRouter';

import Button from '@/components/common/Button';
import Character from '@/components/common/Character';
import ResultDescription from '@/components/pages/Test/ResultDescription';
import ResultHeader from '@/components/pages/Test/ResultHeader';
import ResultStatistics from '@/components/pages/Test/ResultStatistics';
import ResultTypesRelations from '@/components/pages/Test/ResultTypesRelations';

import * as S from '@/pages/Test/Result/styles';

import {
  MBTI_TYPE_COLORS,
  MBTI_TYPE_COLORS_PAIRS
} from '@/constants/MBTIColors';

const TestResult = () => {
  const { navigateTo, params, location } = useRouter();

  const mbti = params.mbti ?? 'XXXX';
  const bgColor = MBTI_TYPE_COLORS[mbti];
  const gColor = MBTI_TYPE_COLORS_PAIRS[mbti];

  const { data: mbtiData } = useCustomQuery(['get-mbti-datas'], {
    method: 'get',
    url: `/mbtis/${mbti}`,
    queryFn: () => axiosRequest.requestAxios<MBTI>('get', `/mbtis/${mbti}`),
    options: {
      staleTime: 1000 * 5 * 60
    }
  });

  return (
    <S.TestResultContainer color={`bg-[${gColor}]`}>
      {/* TODO: mbti 데이터 undefined일 경우 예외처리 / 임시로 'XXXX' 추가 */}
      <ResultHeader mbti={mbti} />
      <Character bgcolor={bgColor} gcolor={gColor} />
      <ResultDescription
        result={{
          summary: mbtiData?.summary,
          content: mbtiData?.content,
          tags: mbtiData?.tags
        }}
      />
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
