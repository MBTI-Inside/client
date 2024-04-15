import { useMemo } from 'react';

import useRouter from '@/hooks/useRouter';

import Dropdown from '@/components/common/Dropdown';
import SideBar from '@/components/common/SideBar';

import MainLogoSvg from '@/assets/image/mainlogo.svg';

import * as S from './index.styles';

const Header = () => {
  const { navigateTo } = useRouter();
  // const { user } = useUser(); // TODO: 전역 상태에서 사용자 정보 가져오기

  const menuItems = useMemo(() => {
    const items = [
      { id: 1, label: '내정보', onClick: () => navigateTo('/mypage') },
      { id: 2, label: '로그아웃', onClick: () => alert('Logout clicked!!') }
    ];

    // if (user.role === 'admin') { // 관리자일 경우 추가 메뉴
    //   items.push({ id: 3, label: '관리자 페이지', onClick: () => navigateTo('/admin') });
    // }

    return items;
  }, [navigateTo]); // 의존성 배열에 user.role 추가

  return (
    <S.HeaderContainer>
      <a onClick={() => navigateTo('/')}>
        <MainLogoSvg />
      </a>
      <S.InterfaceContainer>
        {/* 로그인 시 표시*/}
        <Dropdown items={menuItems}>
          <S.UserIcon />
        </Dropdown>
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
