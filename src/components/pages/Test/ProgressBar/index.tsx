import * as S from '@/components/pages/Test/ProgressBar/styles';

const ProgressBar = () => {
  return (
    <S.ProgressBarContainer>
      <div className="text-end text-white">1 / 16</div>
      <progress
        className="progress progress-info bg-white border-none"
        value="10"
        max="100"
      ></progress>
    </S.ProgressBarContainer>
  );
};

export default ProgressBar;
// 테스트 진행도 표시
