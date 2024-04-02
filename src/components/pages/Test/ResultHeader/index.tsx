import Button from '@/components/common/Button';
import * as S from '@/components/pages/Test/ResultHeader/styles';

const ResultHeader = () => {
  return (
    <S.ResultHeaderContainer>
      {/* TODO: MBTI Type props로 받기 */}
      <p className="font-bold text-5xl text-white">ESTJ</p>
      {/* TODO: share link */}
      <Button>결과 공유하기</Button>
    </S.ResultHeaderContainer>
  );
};

export default ResultHeader;
