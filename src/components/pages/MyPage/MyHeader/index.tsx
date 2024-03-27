import { GrAdobeCreativeCloud } from 'react-icons/gr';
import { IoIosArrowBack } from 'react-icons/io';

import * as S from '@/components/pages/MyPage/MyHeader/styles';

const MyHeader = () => {
  return (
    <S.MyHeaderContainer>
      <div className="pl-4 text-xl text-white">
        <IoIosArrowBack onClick={() => {}} />
      </div>
      <span className="font-bold text-xl text-white">내 MBTI</span>
      <div className="pr-4 text-xl text-white">
        <GrAdobeCreativeCloud />
      </div>
    </S.MyHeaderContainer>
  );
};

export default MyHeader;
