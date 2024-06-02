import * as S from '@/components/pages/Admin/User/UserCard/styles';

const UserCard = () => {
  return (
    <S.UserCardContainer>
      <div className="avatar">
        <div className="w-20 rounded">
          <img src="https://avatars.githubusercontent.com/u/63568239?v=4" />
        </div>
      </div>
      <S.UserInfo>
        <S.UserData>
          <span className="font-bold">언정차</span>
          <span>님</span>
        </S.UserData>
        <S.UserData>
          <span>MBTI</span>
          <span>:</span>
          {/* 최종 MBTI 검사 결과 */}
          <span>ESTJ</span>
        </S.UserData>
        <S.UserData>
          <span>작성한 메모</span>
          <span>:</span>
          <span className="link link-primary">13</span>
        </S.UserData>
      </S.UserInfo>
    </S.UserCardContainer>
  );
};

export default UserCard;
