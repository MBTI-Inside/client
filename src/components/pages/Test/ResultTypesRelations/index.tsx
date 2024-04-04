import * as S from '@/components/pages/Test/ResultTypesRelations/styles';

const ResultTypesRelations = () => {
  return (
    <S.ResultTypeRelationsContainer>
      <S.TypeRelationsHeader>유형별 관계성</S.TypeRelationsHeader>
      <S.RelationsContainer isGood={true}>
        <p className="text-lg font-bold">잘 어울리는 유형</p>
        <p className="font-bold">good type</p>
        <p>
          ISFP 유형은 구속당하는 것을 싫어하는 자유로운 성격 유형입니다.
          성인군자형으로 불리는 이들은 타인의 감정에 대해서 공감하는 능력이 높고
          눈치도 빠른 편입니다. 하지만 본인이 싫은소리, 거절을 잘 하지 못하고
          힘든 것들에 대해 내색하지 않아서 이런 것들에 대해 주변 사람들이
          파악하지 못하면 속에서 혼자 삭히기도 합니다.
        </p>
      </S.RelationsContainer>
      <S.RelationsContainer isGood={false}>
        <p className="text-lg font-bold">안 어울리는 유형</p>
        <p className="font-bold">bad type</p>
        <p>
          ISFP 유형은 연애를 하면서도 혼자만의 시간이 필요한 유형입니다.
          상대방에게 올인하고 우선하기도 하지만 그만큼 에너지가 쉽게 방전되며
          이것에 대해서도 티를 내지 않습니다. 이때 혼자 있을 시간을 주지 않으면
          혼자서 고통받을 수 있습니다. 한편 즉흥적이고 새롭고 재미있는 것을
          좋아하는 이들의 자유로운 성격을 이해해 주는 사람들과 좋은 관계를 맺을
          수 있습니다.
        </p>
      </S.RelationsContainer>
    </S.ResultTypeRelationsContainer>
  );
};

export default ResultTypesRelations;
