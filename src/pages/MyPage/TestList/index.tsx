import Character from '@/components/common/Character';
import Pagination from '@/components/common/Pagination';
import MyTestHeader from '@/components/pages/MyPage/MyTestHeader';
import MyTestResultCard from '@/components/pages/MyPage/MyTestResultCard';

const MyTestList = () => {
  return (
    <main className="flex flex-1 flex-col items-center w-full m-auto justify-center">
      <MyTestHeader />
      <Character bgcolor="#BF1132" gcolor="#FF98CA" />
      <MyTestResultCard />
    </main>
  );
};

export default MyTestList;
// 내가 테스트한 목록을 보여줌

/* 
<div className="flex w-full gap-2 items-center">
  <span>E</span>
  <progress className="progress" value="53" max="100" />
  <span>I</span>
</div>
<div className="flex w-full gap-2 items-center">
  <span>E</span>
  <progress className="progress" value="42" max="100" />
  <span>I</span>
</div>
<div className="flex w-full gap-2 items-center">
  <span>E</span>
  <progress className="progress" value="88" max="100" />
  <span>I</span>
</div>
<div className="flex w-full gap-2 items-center">
  <span>E</span>
  <progress className="progress" value="75" max="100" />
  <span>I</span>
</div> 
*/
