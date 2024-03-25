import { FaPencilAlt } from 'react-icons/fa';

const MyInfo = () => {
  // https://avatars.githubusercontent.com/u/63568239?v=4

  return (
    <div className="flex flex-row bg-white items-center justify-around w-full h-32 gap-2 rounded-lg">
      <div className="avatar">
        <div className="w-20 rounded">
          <img src="https://avatars.githubusercontent.com/u/63568239?v=4" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-end items-center gap-2">
          <div className="flex gap-1">
            <span className="font-bold">언정차</span>
            <span>님</span>
          </div>
          <FaPencilAlt className="text-lg" />
        </div>
        <div>MBTI : ESTJ</div>
      </div>
    </div>
  );
};

export default MyInfo;
