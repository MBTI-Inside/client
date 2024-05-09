import * as S from '@/components/common/Badge/styles';
import Button from '@/components/common/Button';

export interface BadgeProps {
  content: string;
  isClose?: boolean;
}

const Badge = ({ content, isClose = true }: BadgeProps) => {
  return (
    <S.BadgeContainer>
      {content}
      {isClose && <Button classProp="btn-xs w-4 h-4 bg-secondary">X</Button>}
    </S.BadgeContainer>
  );
};

export default Badge;
