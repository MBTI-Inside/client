import { GrAdobeCreativeCloud } from 'react-icons/gr';
import { IoIosArrowBack } from 'react-icons/io';

import Pagination from '@/components/common/Pagination';
import UserCard from '@/components/pages/Admin/User/UserCard';
import UserHeader from '@/components/pages/Admin/User/UserHeader';

import * as S from '@/pages/Admin/User/styles';

const UserList = () => {
  return (
    <S.UserListContainer>
      <UserHeader />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <Pagination />
    </S.UserListContainer>
  );
};

export default UserList;
