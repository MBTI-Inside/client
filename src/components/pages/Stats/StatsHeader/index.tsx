import { FaExchangeAlt, FaPlus, FaSearch } from 'react-icons/fa';

import { useModalContext } from '@/hooks/useModal';

import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Search from '@/components/common/Search';
import * as S from '@/components/pages/Stats/StatsHeader/styles';

const StatsHeader = () => {
  const { openModal } = useModalContext();
  return (
    <S.StatsTitleContainer>
      <S.StatsTitle>
        <S.Title>StatsBTI</S.Title>
        <S.ButtonGroup>
          <Button
            classProp="bg-success"
            onClick={() => openModal(<Search />, null, '검색')}
          >
            <FaSearch />
          </Button>
        </S.ButtonGroup>
      </S.StatsTitle>
      {/* TODO: 검색 데이터는 전역 상태 관리 */}
      <section className="w-full">
        <Badge content="ESTJ" />
        <Badge content="ISTJ" />
        <Badge content="제목 : 안녕" />
        <Badge content="내용 : 진짜" />
        <Badge content="내용 : 진짜" />
        <Badge content="내용 : 진짜" />
        <Badge content="내용 : 진짜" />
        <Badge content="내용 : 진짜" />
        <Badge content="내용 : 진짜" />
      </section>
    </S.StatsTitleContainer>
  );
};

export default StatsHeader;
