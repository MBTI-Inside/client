import { FaExchangeAlt, FaPlus } from 'react-icons/fa';

import { useModalContext } from '@/hooks/useModal';

import Button from '@/components/common/Button';
import MBTITypes from '@/components/common/MBTITypes';
import * as S from '@/components/pages/Admin/Question/QuestionHeader/styles';

const QuestionHeader = () => {
  const { openModal } = useModalContext();
  return (
    <S.QuestionTitleContainer>
      <S.QuestionTitle>
        <S.Title>Questions</S.Title>
        <div>
          {/* 임시 */}
          <Button onClick={() => openModal(<MBTITypes />, null, 'MBTI 선택')}>
            <FaExchangeAlt />
          </Button>
          <Button>
            <FaPlus />
          </Button>
        </div>
      </S.QuestionTitle>
      <section>
        <S.Badge>E</S.Badge>
        <S.Badge>S</S.Badge>
        <S.Badge>제목 : 안녕</S.Badge>
        <S.Badge>내용 : 진짜</S.Badge>
        <S.Badge>좋아요 : 진짜</S.Badge>
        <S.Badge>내용 : 진짜</S.Badge>
        <S.Badge>내용 : 진짜</S.Badge>
        <S.Badge>내용 : 진짜</S.Badge>
        <S.Badge>내용 : 진짜</S.Badge>
        <S.Badge>내용 : 진짜</S.Badge>
      </section>
    </S.QuestionTitleContainer>
  );
};

export default QuestionHeader;
