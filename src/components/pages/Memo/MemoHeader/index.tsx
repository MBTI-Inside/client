import { FaExchangeAlt, FaPlus, FaSearch } from 'react-icons/fa';

import { useModalContext } from '@/hooks/useModal';

import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import MBTITypes from '@/components/common/MBTITypes';
import Search from '@/components/common/Search';
import * as S from '@/components/pages/Memo/MemoHeader/styles';
import Note from '@/components/pages/Memo/Note';

const MemoHeader = () => {
  const { openModal } = useModalContext();

  return (
    <S.MbtiTitleContainer>
      <S.MbtiTitle>
        <S.Title>MemoBTI</S.Title>
        <S.ButtonGroup>
          <Button
            classProp="bg-success"
            onClick={() => openModal(<Search />, null, '검색')}
          >
            <FaSearch />
          </Button>
          <Button
            classProp="bg-info"
            onClick={() =>
              openModal(<MBTITypes mbtiType={'ESTJ'} />, null, 'MBTI 선택')
            }
            // TODO: 임시로 mbtiType 제공. 추후 연결 필요
          >
            <FaExchangeAlt />
          </Button>
          <Button
            classProp="bg-primary"
            onClick={() => openModal(<Note />, null, '메모 작성')}
          >
            <FaPlus />
          </Button>
        </S.ButtonGroup>
      </S.MbtiTitle>
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
    </S.MbtiTitleContainer>
  );
};

export default MemoHeader;
