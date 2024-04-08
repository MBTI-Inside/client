import { GrAdobeCreativeCloud } from 'react-icons/gr';
import { IoIosArrowBack } from 'react-icons/io';

import * as S from '@/components/pages/Admin/User/UserHeader/styles';

const UserHeader = () => {
  return (
    <S.UserHeaderContainer>
      <div className="pl-4 text-xl text-white">
        <IoIosArrowBack onClick={() => {}} />
      </div>
      <span className="font-bold text-xl text-white">title</span>
      <div className="pr-4 text-xl text-white">
        <GrAdobeCreativeCloud />
      </div>
    </S.UserHeaderContainer>
  );
};

export default UserHeader;
