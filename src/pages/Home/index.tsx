import { NavLink } from 'react-router-dom';

import useRouter from '@/hooks/useRouter';

import Button from '@/components/common/Button';
import Character from '@/components/pages/Home/Character';

import * as S from './index.styles';

const Home = () => {
  const { navigateTo } = useRouter();

  return (
    <S.HomeContainer>
      <Character />
      <S.ContentSection>
        <S.Title>MBTI Inside</S.Title>
        <S.ButtonGroup>
          <Button
            classProp="w-80 h-14 text-lg bg-[#FFA500] hover:bg-gray-700 text-white border-none"
            onClick={() => navigateTo('/test')}
          >
            테스트 하러가기
          </Button>
          <Button
            classProp="w-80 h-14 text-lg bg-[#4CAF50] hover:bg-gray-700 text-white border-none"
            onClick={() => navigateTo('/stats')}
          >
            통계 보러가기
          </Button>
          <Button
            classProp="w-80 h-14 text-lg bg-[#32BEBE] hover:bg-gray-700 text-[#333333] border-none"
            onClick={() => navigateTo('/memo')}
          >
            담벼락 보러가기
          </Button>
        </S.ButtonGroup>
      </S.ContentSection>
    </S.HomeContainer>
  );
};

export default Home;
