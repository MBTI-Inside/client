import Badge from '@/components/common/Badge';
import * as S from '@/components/pages/Test/ResultDescription/styles';

interface ResultDescriptionProps {
  result: {
    summary?: string;
    content?: string;
    tags?: string[];
  };
}

const ResultDescription = ({ result }: ResultDescriptionProps) => {
  const { summary, content, tags } = result;

  return (
    <S.ResultDescriptionContainer>
      <S.Title>{summary}</S.Title>
      <S.Content>{content}</S.Content>
      <S.BadgeGroup>
        {tags?.map((tag: string) => {
          return (
            <Badge
              content={`#${tag}`}
              isClose={false}
              classProp="p-4 w-full text-center"
            />
          );
        })}
      </S.BadgeGroup>
    </S.ResultDescriptionContainer>
  );
};

export default ResultDescription;
