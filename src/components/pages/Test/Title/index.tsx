import * as S from '@/components/pages/Test/Title/styles';

interface TestTitleProps {
  title: string;
  seq: string;
}

const TestTitle = ({ title, seq }: TestTitleProps) => {
  return (
    <S.TestTitleContainer>
      <S.TestNumber>{seq}</S.TestNumber>
      <S.TestQuestion>{title}</S.TestQuestion>
    </S.TestTitleContainer>
  );
};

export default TestTitle;
// 테스트 질문 표시
