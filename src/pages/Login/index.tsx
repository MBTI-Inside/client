import Button from '@/components/common/Button';
import Character from '@/components/common/Character';

import * as S from '@/pages/Login/styles';

import Google from '@/assets/image/google.svg';
import Kakao from '@/assets/image/kakao.svg';
import Logo from '@/assets/image/logo.svg';
import Naver from '@/assets/image/naver.svg';

const Login = () => {
  return (
    <S.LoginContainer>
      <Character bgcolor="#FF42B3" gcolor="#F9BAAC" />
      <S.ContentSection>
        <S.Title>MBTI 함께 하기</S.Title>
        <S.ButtonGroup>
          <Button
            classProp={
              'w-80 h-12 bg-[#FEE501] rounded-full shadow-lg border-none'
            }
          >
            <Kakao />
            <S.LoginText>카카오로 함께 하기</S.LoginText>
          </Button>

          <Button
            classProp={
              'w-80 h-12 bg-[#03C75A] rounded-full shadow-lg border-none text-white'
            }
          >
            <Naver />
            <S.LoginText>네이버로 함께 하기</S.LoginText>
          </Button>

          <Button
            classProp={
              'w-80 h-12 gap-4 bg-[#FFFFFF] rounded-full shadow-lg border-none'
            }
          >
            <Google />
            <S.LoginText>구글로 함께 하기</S.LoginText>
          </Button>
          <Button
            classProp={
              'w-80 h-12 bg-[#B2ACF9] rounded-full shadow-lg border-none'
            }
          >
            <Logo />
            <S.LoginText>그냥 함께 하기</S.LoginText>
          </Button>
        </S.ButtonGroup>
      </S.ContentSection>
    </S.LoginContainer>
  );
};

export default Login;
