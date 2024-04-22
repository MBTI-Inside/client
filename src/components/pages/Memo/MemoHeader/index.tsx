import { FaExchangeAlt, FaPlus, FaSearch } from 'react-icons/fa';

import { useModalContext } from '@/hooks/useModal';

import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import MBTITypes from '@/components/common/MBTITypes';
import Search from '@/components/common/Search';
import Note from '@/components/pages/Memo/Note';

import * as S from './index.styles';

const MemoHeader = () => {
  const { openModal } = useModalContext();

  return (
    <S.MbtiTitleContainer>
      <S.MbtiTitle>
        <S.Title>MemoBTI</S.Title>
        {/* 
            TODO: 버튼 클릭 시 좌측으로 2개 버튼 표시 (슬라이드 애니메이션)
            메모 등록버튼 - 클릭시 등록 페이지 이동 - daisyUI Custom Button
            검색 버튼 - 클릭 시 검색 모달. 여기서 MBTI유형 선택 또는 메모 제목, 내용, 작성자 검색 가능 - daisyUI Custom Button, Modal
        */}
        <div className="flex gap-2">
          {/* 임시 */}
          <Button
            classProp="bg-success"
            onClick={() => openModal(<Search />, null, '검색')}
          >
            <FaSearch />
          </Button>
          <Button
            classProp="bg-info"
            onClick={() => openModal(<MBTITypes />, null, 'MBTI 선택')}
          >
            <FaExchangeAlt />
          </Button>
          <Button
            classProp="bg-primary"
            onClick={() => openModal(<Note />, null, '메모 작성')}
          >
            <FaPlus />
          </Button>
        </div>
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
