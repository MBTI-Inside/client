import * as S from '@/components/pages/Stats/StatsCard/styles';

const StatsCard = () => {
  return (
    <S.StatsCardContainer>
      <S.StatsQuestionHeader>
        <S.Badge>E</S.Badge>
        <span>
          내가 더 잘 알고 있는 것은? 내가 더 잘 알고 있는 것은? 내가 더 잘 알고
          있는 것은? 내가 더 잘 알고 있는 것은? 내가 더 잘 알고 있는 것은?
        </span>
      </S.StatsQuestionHeader>
      <S.ProgressWrapper>
        <progress
          className="progress progress-primary [--progressbg-shdw:yellow] bg-green-300 h-8 "
          value={30}
          max={100}
        />
      </S.ProgressWrapper>
      <S.AnswerContainer>
        <S.Badge>E</S.Badge>
        <div className="w-2/3">
          상대방을 기분 좋게 하는 방법 :D 상대방을 기분 좋게 하는 방법 :D
          상대방을 기분 좋게 하는 방법 :D{' '}
        </div>
        <span className="w-1/6 text-end">58%</span>
      </S.AnswerContainer>
      <S.AnswerContainer>
        <S.Badge className="bg-green-300">I</S.Badge>
        <div className="w-2/3">상대방을 기분 나쁘지 않게 배려하는 방법 :)</div>
        <span className="w-1/6 text-end">42%</span>
      </S.AnswerContainer>
    </S.StatsCardContainer>
  );
};

export default StatsCard;
