import { FaPencilAlt } from 'react-icons/fa';

const MyInfo = () => {
  return (
    <div className="flex flex-row bg-white items-center justify-center w-full">
      <div>photo</div>
      <div className="flex flex-col">
        <div>
          <span>
            언정차님
            <FaPencilAlt />
          </span>
        </div>
        <div>MBTI: ESTJ</div>
      </div>
    </div>
  );
};

export default MyInfo;
