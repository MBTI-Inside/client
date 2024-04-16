import { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';

import useRouter from '@/hooks/useRouter';

import MainLogoSvg from '@/assets/image/mainlogo.svg';

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
          <a onClick={() => handleSideBarToggle('/test')}>
            <S.Li className="bg-[#FFA500]">테스트 하러가기</S.Li>
          </a>
          <a onClick={() => handleSideBarToggle('/memo')}>
            <S.Li className="bg-[#4CAF50]">담벼락 보러가기</S.Li>
          </a>
          <a onClick={() => handleSideBarToggle('/stats')}>
            <S.Li className="bg-[#32BEBE]">통계 보러가기</S.Li>
          </a>
          {/* TODO: 회원정보 보여주기 zustand */}
          <S.FooterLi>
            <S.FooterDiv>
              <S.UserContainer>
                <S.UserProfile>
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </S.UserProfile>
                <S.UserInfoContainer>
                  {/* 닉네임 글자수 제한 : 한글 5자 영문 10자, 한영 합쳐서 10byte 제한*/}
                  <S.UserInfo>{'ababababab'}님 환영합니다!</S.UserInfo>
                  <S.UserInfo>최근 MBTI : {'ESTJ'}</S.UserInfo>
                  <S.UserInfo>메모지 수 : {123} 스티커</S.UserInfo>
                </S.UserInfoContainer>
              </S.UserContainer>
            </S.FooterDiv>
          </S.FooterLi>
        </S.Ul>
      </S.SideBarContentContainer>
    </S.SideBarContainer>
  );
};

export default SideBar;
