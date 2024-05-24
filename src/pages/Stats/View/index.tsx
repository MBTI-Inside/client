import tw from 'tailwind-styled-components';

import Pagination from '@/components/common/Pagination';
import StatsCard from '@/components/pages/Stats/StatsCard';
import StatsHeader from '@/components/pages/Stats/StatsHeader';

import * as S from '@/pages/Stats/View/styles';

const StatsView = () => {
  return (
    <S.StatsViewContainer>
      <StatsHeader />
      <StatsCard />
      <Pagination />
    </S.StatsViewContainer>
  );
};

export default StatsView;

const MbtiTitleContainer = tw.div`
  flex 
  flex-col 
  items-center 
  w-full
  p-3
  justify-between
`;

const MbtiTitle = tw.div`
  flex 
  w-full 
  justify-between
`;

const Title = tw.div`
  text-4xl
  font-bold
`;

const Badge = tw.div`
  badge 
  badge-secondary 
  m-1
`;
