import { GrAdobeCreativeCloud } from 'react-icons/gr';
import { IoIosArrowBack } from 'react-icons/io';

import Pagination from '@/components/common/Pagination';
import UserCard from '@/components/pages/Admin/User/UserCard';
import UserHeader from '@/components/pages/Admin/User/UserHeader';

const UserList = () => {
  return (
    <main className="flex flex-1 flex-col items-center w-full m-auto gap-2">
      <UserHeader />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <Pagination />
    </main>
  );
};

export default UserList;
