import Pagination from '@/components/common/Pagination';
import UserCard from '@/components/pages/User/UserCard';
import UserHeader from '@/components/pages/User/UserHeader';

import * as S from '@/pages/User/styles';

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
