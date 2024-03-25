import Button from '@/components/common/Button';
import MyInfo from '@/components/pages/MyPage/MyInfo';
import MyLogo from '@/components/pages/MyPage/MyLogo';

const MyPage = () => {
  return (
    <div
      className="w-full h-full
    pt-10
    flex
    flex-col
    flex-1
    content-center
    "
    >
      <MyLogo />
      <div className="bg-[#0272F1] flex justify-center h-1/2">
        <div className="flex flex-col w-5/6 items-center justify-center gap-10 mb-10">
          <MyInfo />
          <Button classProp="w-full">테스트 결과 보기</Button>
          <Button classProp="w-full">메모 보기</Button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
// 마이페이지를 보여줌
// 가입일, 프로필사진 변경, 닉네임 변경 등등
