import { MBTIProportion, MBTIType } from '@/@types';

import * as S from '@/components/pages/Test/StatisticsContentCard/styles';

import { MBTI_TYPES_VALUE } from '@/constants/MBTIOptions';

interface StatisticsContentCardProps {
  stat: MBTIProportion[];
  mbtiType: MBTIType;
}

const StatisticsContentCard = ({
  stat,
  mbtiType
}: StatisticsContentCardProps) => {
  const [left, right] = stat;
  const mbtiData = MBTI_TYPES_VALUE[mbtiType];
  return (
    <S.StatisticsContentCardContainer>
      <div className="font-bold text-xl">{mbtiData.label}</div>
      <S.ProgressBar>
        <span className="w-1/6 text-left">{left.rate}%</span>
        <progress
          className={`progress bg-[${mbtiData.color}]`}
          value={left.rate}
          max={100}
        />
        <span className="w-1/6 text-right">{right.rate}%</span>
      </S.ProgressBar>
      <S.TypesContainer>
        <span>{left.type}</span>
        <span>{right.type}</span>
      </S.TypesContainer>
    </S.StatisticsContentCardContainer>
  );
};

export default StatisticsContentCard;
