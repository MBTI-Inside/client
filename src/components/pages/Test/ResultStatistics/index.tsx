import { MBTIProportions } from '@/@types';

import * as S from '@/components/pages/Test/ResultStatistics/styles';
import StatisticsContentCard from '@/components/pages/Test/StatisticsContentCard';

interface ResultStatisticsProps {
  stats: MBTIProportions;
}

const ResultStatistics = ({ stats }: ResultStatisticsProps) => {
  return (
    <S.ResultStatisticsContainer>
      <S.Title>내 검사 결과</S.Title>
      <StatisticsContentCard stat={stats.energy} mbtiType="energy" />
      <StatisticsContentCard stat={stats.awareness} mbtiType="awareness" />
      <StatisticsContentCard stat={stats.judgement} mbtiType="judgement" />
      <StatisticsContentCard stat={stats.life} mbtiType="life" />
    </S.ResultStatisticsContainer>
  );
};

export default ResultStatistics;
