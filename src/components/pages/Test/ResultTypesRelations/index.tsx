import { Fit } from '@/@types';

import * as S from '@/components/pages/Test/ResultTypesRelations/styles';

interface ResultTypesReleationsProps {
  fits?: Fit[];
}

const ResultTypesRelations = ({ fits }: ResultTypesReleationsProps) => {
  const goodType = fits?.find((fit) => fit.type === 'good');
  const badType = fits?.find((fit) => fit.type === 'bad');

  return (
    <S.ResultTypeRelationsContainer>
      <S.TypeRelationsHeader>유형별 관계성</S.TypeRelationsHeader>
      <S.RelationsContainer isGood={true}>
        <p className="text-lg font-bold">잘 어울리는 유형</p>
        <p className="font-bold">{goodType?.targetMbti}</p>
        <p>{goodType?.description}</p>
      </S.RelationsContainer>
      <S.RelationsContainer isGood={false}>
        <p className="text-lg font-bold">안 어울리는 유형</p>
        <p className="font-bold">{badType?.targetMbti}</p>
        <p>{badType?.description}</p>
      </S.RelationsContainer>
    </S.ResultTypeRelationsContainer>
  );
};

export default ResultTypesRelations;
