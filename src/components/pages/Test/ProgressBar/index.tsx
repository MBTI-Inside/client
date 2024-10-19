import * as S from '@/components/pages/Test/ProgressBar/styles';

interface ProgressBarProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}

const ProgressBar = ({
  currentQuestionIndex,
  totalQuestions
}: ProgressBarProps) => {
  // 진행도를 퍼센트로 계산
  const progressValue = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <S.ProgressBarContainer>
      {/* 현재 질문 번호와 총 질문 수를 표시 */}
      <div className="text-end text-white">
        {currentQuestionIndex + 1} / {totalQuestions}
      </div>
      <progress
        className="progress progress-info bg-white border-none"
        value={progressValue}
        max="100"
      ></progress>
    </S.ProgressBarContainer>
  );
};

export default ProgressBar;
