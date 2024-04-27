import { ReactNode, useState } from 'react';

import useRouter from '@/hooks/useRouter';

import MainLogoSvg from '@/assets/image/mainlogo.svg';

import Button from '../Button';
import * as S from './index.styles';

interface SideBarProps {
  children: ReactNode;
}

const SideBar = ({ children }: SideBarProps) => {
  const { navigateTo } = useRouter();
  // SideBar 표시 여부 상태 초기화
  const [isChecked, setIsChecked] = useState(false);

  // SideBar Button 클릭 시 상태 변화
  const handleSideBarToggle = (to?: string) => {
    setIsChecked(!isChecked);
    if (to) navigateTo(to);
  };

  return (
    <S.SideBarContainer>
      <S.SideBarToggle
        id="side-bar"
        type="checkbox"
        checked={isChecked}
        readOnly
      />
      <S.SideBarButton htmlFor="side-bar" onClick={() => handleSideBarToggle()}>
        {children}
      </S.SideBarButton>
      <S.SideBarContentContainer>
        <S.SideBarOverlay
          htmlFor="side-bar"
          aria-label="close sidebar"
          onClick={() => handleSideBarToggle()}
        />
        <S.Ul>
          <a onClick={() => handleSideBarToggle('/')}>
            <MainLogoSvg />
          </a>
          <Button
            classProp="w-full h-14 text-lg bg-[#FFA500] text-white border-none"
            onClick={() => handleSideBarToggle('/test')}
          >
            테스트 하러가기
          </Button>
          <Button
            classProp="w-full h-14 text-lg bg-[#4CAF50] text-white border-none"
            onClick={() => handleSideBarToggle('/stats')}
          >
            통계 보러가기
          </Button>
          <Button
            classProp="w-full h-14 text-lg bg-[#32BEBE] text-[#333333] border-none"
            onClick={() => handleSideBarToggle('/memo')}
          >
            담벼락 보러가기
          </Button>
          <Button
            classProp="w-full h-14 text-lg bg-[#003366] text-white border-none"
            onClick={() => handleSideBarToggle('/admin')}
          >
            어드민 바로가기
          </Button>
          {/* TODO: 회원정보 보여주기 zustand */}
          <S.UserContainer>
            <S.UserProfile>
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </S.UserProfile>
            <S.UserInfo>
              {/* 닉네임 글자수 제한 : 한글 5자 영문 10자, 한영 합쳐서 10byte 제한*/}
              <div>{'ababababab'}님 환영합니다!</div>
              <div>최근 MBTI : {'ESTJ'}</div>
              <div>메모지 수 : {123}</div>
            </S.UserInfo>
          </S.UserContainer>
        </S.Ul>
      </S.SideBarContentContainer>
    </S.SideBarContainer>
  );
};

export default SideBar;
