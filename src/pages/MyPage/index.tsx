import Button from '@/components/common/Button';
import MyInfo from '@/components/pages/MyPage/MyInfo';
import MyLogo from '@/components/pages/MyPage/MyLogo';

import * as S from '@/pages/MyPage/styles';

const MyPage = () => {
  return (
    <S.MyPageContainer>
      <MyLogo />
      <S.MyPageSectionWrapper>
        <S.MyPageSection>
          <MyInfo />
          <Button classProp="w-full h-14 text-lg text-white bg-primary">
            테스트 결과 보기
          </Button>
          <Button classProp="w-full h-14 text-lg text-white bg-secondary">
            메모 보기
          </Button>
        </S.MyPageSection>
      </S.MyPageSectionWrapper>
    </S.MyPageContainer>
  );
};

export default MyPage;
// 마이페이지를 보여줌
// 가입일, 프로필사진 변경, 닉네임 변경 등등
