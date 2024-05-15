import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';

import Button from '@/components/common/Button';
import ProgressBar from '@/components/pages/Test/ProgressBar';
import TestTitle from '@/components/pages/Test/Title';

import * as S from '@/pages/Test/styles';

const Test = () => {
  return (
    <S.TestContainer>
      <TestTitle />
      <S.TestContent>
        <Button classProp="w-full h-28 p-4 rounded-2xl bg-white text-black">
          남은 얘기는 만나서 해야징
        </Button>
        <Button classProp="w-full h-28 p-4 rounded-2xl bg-white text-black">
          통화가 끝났으니 이제 쉬어야지..
        </Button>
      </S.TestContent>
      <S.TestNavigation>
        <Button classProp="bg-secondary text-white w-32">
          <div className="flex justify-evenly w-full">
            <SlArrowLeft />
            <span>이전</span>
          </div>
        </Button>
        <Button classProp="bg-primary text-white w-32">
          <div className="flex justify-evenly w-full">
            <span>다음</span>
            <SlArrowRight />
          </div>
        </Button>
      </S.TestNavigation>
      <ProgressBar />
    </S.TestContainer>
  );
};

export default Test;
// 테스트 내용을 표시한다.
