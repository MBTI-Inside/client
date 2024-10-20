import { MBTI, MBTIProportion, MBTIProportions } from '@/@types';
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

// 주어진 배열의 rate 합이 100이 되도록 조정하는 함수
const normalizeRates = (array: MBTIProportion[]): MBTIProportion[] => {
  const total = array.reduce((sum, item) => sum + item.rate, 0); // 총합 계산

  // 각 항목의 정수 비율을 계산하고 반올림
  let adjustedRates = array.map((item) => ({
    ...item,
    rate: Math.round((item.rate / total) * 100)
  }));

  // 정수 합계를 계산하여 100과의 차이를 구함
  const difference =
    100 - adjustedRates.reduce((sum, item) => sum + item.rate, 0);

  // 차이가 있다면, 가장 큰 비율 항목에 차이를 더해 보정
  if (difference !== 0) {
    const maxItem = adjustedRates.reduce((prev, curr) =>
      curr.rate > prev.rate ? curr : prev
    );
    maxItem.rate += difference;
  }

  return adjustedRates;
};

// 모든 키에 대해 rate를 조정하는 함수
const normalizeStateRates = (state: MBTIProportions): MBTIProportions => {
  const normalizedState: MBTIProportions = {
    energy: normalizeRates(state.energy),
    awareness: normalizeRates(state.awareness),
    judgement: normalizeRates(state.judgement),
    life: normalizeRates(state.life)
  };
  return normalizedState;
};

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

  // 실행
  const normalizedState = normalizeStateRates(
    location.state as MBTIProportions
  );

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
      <ResultStatistics stats={normalizedState} />
      <ResultTypesRelations fits={mbtiData?.fit} />
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
