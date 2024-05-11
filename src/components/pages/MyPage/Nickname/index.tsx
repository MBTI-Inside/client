import Button from '@/components/common/Button';

const Nickname = () => {
  return (
    <section className="flex justify-between">
      <input
        type="text"
        className="input input-primary"
        placeholder="닉네임을 입력하세요."
      />
      <Button classProp="w-20 bg-primary text-white text-lg">저장</Button>
    </section>
  );
};

export default Nickname;
