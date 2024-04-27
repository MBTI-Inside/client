import * as S from '@/components/common/Badge/styles';
import Button from '@/components/common/Button';

export interface BadgeProps {
  content: string;
}

const Badge = ({ content }: BadgeProps) => {
  return (
    <S.BadgeContainer>
      {content}
      <Button classProp="btn-xs w-4 h-4 bg-secondary">X</Button>
    </S.BadgeContainer>
  );
};

export default Badge;
