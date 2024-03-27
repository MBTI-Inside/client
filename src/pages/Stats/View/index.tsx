import { FaExchangeAlt } from 'react-icons/fa';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import tw from 'tailwind-styled-components';

import Button from '@/components/common/Button';
import Pagination from '@/components/common/Pagination';

const StatsView = () => {
  return (
    <div className="w-full">
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
      <section className="bg-yellow-800">
        <div>문항 타입 : E</div>
        <div>문항 질문 : 내가 더 잘 알고 있는 것은?</div>
        <div>차트</div>
        <div>E답변: 상대방을 기분 좋게 하는 방법 :D</div>
        <div>I답변: 상대방을 기분 나쁘지 않게 배려하는 방법 :)</div>
        <div></div>
      </section>
      <Pagination />
    </div>
  );
};

export default StatsView;

const MbtiTitleContainer = tw.div`
  flex 
  flex-col 
  items-center 
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
