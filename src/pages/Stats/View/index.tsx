import { FaExchangeAlt } from 'react-icons/fa';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import tw from 'tailwind-styled-components';

import Button from '@/components/common/Button';
import Pagination from '@/components/common/Pagination';
import StatsCard from '@/components/pages/Stats/StatsCard';

import * as S from '@/pages/Stats/View/styles';

const StatsView = () => {
  return (
    <S.StatsViewContainer>
      <MbtiTitleContainer>
        <MbtiTitle>
          {/* TODO: 검색 데이터는 전역 상태 관리 */}
          <Title>StatsBTI</Title>
          <div>
            {/* 임시 */}
            <Button>
              <PiMagnifyingGlassBold />
            </Button>
            <Button>
              <FaExchangeAlt />
            </Button>
          </div>
        </MbtiTitle>
      </MbtiTitleContainer>
      <section className="bg-white">
        <Badge>E</Badge>
        <Badge>I</Badge>
        <Badge>제목 : 진짜</Badge>
        <Badge>내용 : 진짜</Badge>
        <Badge>내용 : 버스에서</Badge>
        <Badge>내용 : 창밖</Badge>
        <Badge>내용 : 의자</Badge>
        <Badge>내용 : 상상</Badge>
      </section>
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
