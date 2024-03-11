import Button from '@/components/common/Button';
import Character from '@/components/common/Character';
import SmallCharacter from '@/components/common/SmallCharacter';

const Admin = () => {
  return (
    <div className="flex flex-col my-5">
      <Character bgcolor="#D5BA38" gcolor="#7FBB88" />
      <h3
        className="font-bold
            text-6xl
            text-center
            pb-[60px]
            text-[#000]
            bg-[#D5BA38]"
      >
        Admin 😎
      </h3>
      <Button classProp={'text-xl'}>테스트 관리</Button>
      <Button classProp={'text-xl'}>게시글 관리</Button>
      <Button classProp={'text-xl'}>사용자 관리</Button>
    </div>
  );
};

export default Admin;

// admin의 메인 페이지 - 일일 검사수(통계), 테스트 관리(버튼), 유저관리(버튼)
