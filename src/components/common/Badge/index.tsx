import * as S from '@/components/common/Badge/styles';

export interface BadgeProps {
  content: string;
}

const Badge = ({ content }: BadgeProps) => {
  return <S.BadgeContainer>{content}</S.BadgeContainer>;
};

export default Badge;
