import * as S from '@/components/common/Alert/styles';
import Button from '@/components/common/Button';

const Alert = () => {
  return (
    <S.AlertContainer role="alert">
      <S.AlertIcon />
      <S.AlertContent>제목을 입력해 주세요.</S.AlertContent>
      <div>
        <Button classProp={'h-8 rounded-md'}>확인</Button>
      </div>
    </S.AlertContainer>
  );
};

export default Alert;
