import useRouter from '@/hooks/useRouter';

import Dropdown from '@/components/common/Dropdown';
import SideBar from '@/components/common/SideBar';

import MainLogoSvg from '@/assets/image/mainlogo.svg';

import * as S from './index.styles';

const Header = () => {
  const { navigateTo } = useRouter();

  const menuItems = [
    { id: 1, label: 'Profile', onClick: () => console.log('Profile clicked') },
    {
      id: 2,
      label: 'Settings',
      onClick: () => console.log('Settings clicked')
    },
    { id: 3, label: 'Logout', onClick: () => console.log('Logout clicked') }
  ];

  return (
    <S.HeaderContainer>
      <a onClick={() => navigateTo('/')}>
        <MainLogoSvg />
      </a>
      <S.InterfaceContainer>
        {/* 로그인 시 표시*/}
        {/* <a onClick={() => alert('TODO: 메뉴 보여주기')}>
          <S.UserIcon />
        </a> */}
        <Dropdown items={menuItems}>
          <S.UserIcon /> {/* 이 아이콘을 클릭하면 Dropdown이 트리거됩니다 */}
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
