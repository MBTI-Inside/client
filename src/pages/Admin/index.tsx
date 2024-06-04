import useRouter from '@/hooks/useRouter';

import Button from '@/components/common/Button';
import Character from '@/components/common/Character';

import * as S from '@/pages/Admin/styles';

const Admin = () => {
  const { navigateTo } = useRouter();

  return (
    <S.AdminContainer>
      <Character bgcolor="#D5BA38" gcolor="#7FBB88" />
      <S.ContentSection>
        <S.Title>Admin 😎</S.Title>
        <S.ButtonGroup>
          <Button
            classProp="w-80 h-14 bg-[#4A90E2] rounded-full shadow-lg border-none text-white text-lg"
            onClick={() => navigateTo('/admin/question')}
          >
            테스트 관리
          </Button>
          <Button
            classProp="w-80 h-14 bg-[#34A853] rounded-full shadow-lg border-none text-white text-lg"
            onClick={() => navigateTo('/admin/user-list')}
          >
            사용자 관리
          </Button>
        </S.ButtonGroup>
      </S.ContentSection>
    </S.AdminContainer>
  );
};

export default Admin;

// admin의 메인 페이지 - 일일 검사수(통계), 테스트 관리(버튼), 유저관리(버튼)
