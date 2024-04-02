import * as S from '@/components/pages/Test/ResultStatistics/styles';
import StatisticsContentCard from '@/components/pages/Test/StatisticsContentCard';

const ResultStatistics = () => {
  return (
    <S.ResultStatisticsContainer>
      <S.Title>내 검사 결과</S.Title>
      <StatisticsContentCard />
      <StatisticsContentCard />
      <StatisticsContentCard />
      <StatisticsContentCard />
    </S.ResultStatisticsContainer>
  );
};

export default ResultStatistics;
