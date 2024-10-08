import { FaSearch } from 'react-icons/fa';

import { useModalContext } from '@/hooks/useModal';

import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Search from '@/components/common/Search';
import * as S from '@/components/pages/Question/QuestionHeader/styles';

const QuestionHeader = () => {
  const { openModal } = useModalContext();
  return (
    <S.QuestionTitleContainer>
      <S.QuestionTitle>
        <S.Title>Questions</S.Title>
        <S.ButtonGroup>
          <Button
            classProp="bg-success"
            onClick={() => openModal(<Search isType={true} />, null, '검색')}
          >
            <FaSearch />
          </Button>
        </S.ButtonGroup>
      </S.QuestionTitle>
      <section className="w-full">
        <Badge content="E" />
        <Badge content="S" />
        <Badge content="제목 : 안녕" />
        <Badge content="내용 : 진짜" />
        <Badge content="좋아요 : 진짜" />
        <Badge content="내용 : 진짜" />
        <Badge content="내용 : 진짜" />
        <Badge content="내용 : 진짜" />
        <Badge content="내용 : 진짜" />
        <Badge content="내용 : 진짜" />
      </section>
    </S.QuestionTitleContainer>
  );
};

export default QuestionHeader;
