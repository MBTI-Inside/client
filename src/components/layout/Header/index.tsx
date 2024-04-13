import useRouter from '@/hooks/useRouter';

import SideBar from '@/components/common/SideBar';

import MainLogoSvg from '@/assets/image/mainlogo.svg';

import * as S from './index.styles';

const Header = () => {
  const { navigateTo } = useRouter();

  return (
    <S.HeaderContainer>
      <a onClick={() => navigateTo('/')}>
        <MainLogoSvg />
      </a>
      <S.InterfaceContainer>
        {/* 로그인 시 표시*/}
        <a onClick={() => alert('TODO: 메뉴 보여주기')}>
          <S.UserIcon />
        </a>
        <a onClick={() => navigateTo('/login')}>
          <S.LoginIcon />
        </a>
        <SideBar>
          <S.MenuIcon />
        </SideBar>
      </S.InterfaceContainer>
    </S.HeaderContainer>
  );
};

export default Header;
