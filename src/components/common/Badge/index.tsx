import * as S from '@/components/common/Badge/styles';
import Button from '@/components/common/Button';

export interface BadgeProps {
  content: string;
  isClose?: boolean;
  classProp?: string;
}

const Badge = ({ content, isClose = true, classProp }: BadgeProps) => {
  return (
    <S.BadgeContainer className={classProp}>
      <span>{content}</span>
      {isClose && <Button classProp="btn-xs w-4 h-4 bg-secondary">X</Button>}
    </S.BadgeContainer>
  );
};

export default Badge;
