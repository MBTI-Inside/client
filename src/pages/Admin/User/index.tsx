import { GrAdobeCreativeCloud } from 'react-icons/gr';
import { IoIosArrowBack } from 'react-icons/io';

import Pagination from '@/components/common/Pagination';
import UserHeader from '@/components/pages/Admin/User/UserHeader';

const UserList = () => {
  return (
    <main className="flex flex-1 flex-col items-center w-full m-auto gap-2">
      <UserHeader />
      <section className="flex flex-row bg-white items-center justify-around w-5/6 h-32 gap-2 rounded-lg">
        <div className="avatar">
          <div className="w-20 rounded">
            <img src="https://avatars.githubusercontent.com/u/63568239?v=4" />
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-end">
          <div className="flex gap-1 justify-end">
            <span className="font-bold">언정차</span>
            <span>님</span>
          </div>
          <div className="flex gap-1 justify-end">
            <span>MBTI</span>
            <span>:</span>
            {/* 최종 MBTI 검사 결과 */}
            <span>ESTJ</span>
          </div>
          <div className="flex gap-1 justify-end">
            <span>작성한 메모</span>
            <span>:</span>
            <span className="link link-primary">13</span>
          </div>
        </div>
      </section>
      <Pagination />
    </main>
  );
};

export default UserList;
