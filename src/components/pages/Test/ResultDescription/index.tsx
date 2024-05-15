import Badge from '@/components/common/Badge';
import * as S from '@/components/pages/Test/ResultDescription/styles';

const ResultDescription = () => {
  return (
    <S.ResultDescriptionContainer>
      <S.Title>리더안하면 병드는 ESTJ</S.Title>
      <S.Content>
        ESTJ 유형은 일을 조직하고 프로젝트를 계획하고 출범시키는 능력이
        뛰어납니다. 현실적이고 사실적이며 체계적, 논리적으로 사업이나 조직체를
        이끌어가는 타고난 재능을 가졌기 때문입니다. 혼돈스러운 상태나 불분명한
        상태 또는 실용성이 없는 분야에는 큰 흥미가 없습니다. 그러나 필요시에는
        언제나 응용하는 힘이 있습니다. 분명한 규칙을 중요시하고 그에 따라
        행동하고 일을 추진하고 완성해 나갑니다. 어떤 계획이나 결정을 내릴 때
        확고한 사실에 바탕을 두고 이행합니다. 대체로 결과를 현재 볼 수 있는 일을
        즐기는 편입니다.
      </S.Content>
      <S.BadgeGroup>
        <Badge
          content="#책임감"
          isClose={false}
          classProp="p-4 w-full text-center"
        />
        <Badge
          content="#꼰대"
          isClose={false}
          classProp="p-4 w-full text-center"
        />
        <Badge
          content="#호불호확실"
          isClose={false}
          classProp="p-4 w-full text-center"
        />
        <Badge
          content="#단계적계획"
          isClose={false}
          classProp="p-4 w-full text-center"
        />
      </S.BadgeGroup>
    </S.ResultDescriptionContainer>
  );
};

export default ResultDescription;
