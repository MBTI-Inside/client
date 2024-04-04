import * as S from '@/components/pages/Test/StatisticsContentCard/styles';

const StatisticsContentCard = () => {
  return (
    <S.StatisticsContentCardContainer>
      <div className="font-bold text-xl">에너지</div>
      <S.ProgressBar>
        <span className="w-1/6 text-left">72%</span>
        <progress className="progress bg-slate-400" value={72} max={100} />
        <span className="w-1/6 text-right">28%</span>
      </S.ProgressBar>
      <S.TypesContainer>
        <span>E</span>
        <span>I</span>
      </S.TypesContainer>
    </S.StatisticsContentCardContainer>
  );
};

export default StatisticsContentCard;
