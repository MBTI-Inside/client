import { BsExclamationCircleFill } from 'react-icons/bs';

import Button from '@/components/common/Button';

const Alert = () => {
  return (
    <div role="alert" className="flex flex-col gap-2 items-center">
      <BsExclamationCircleFill className="text-4xl text-yellow-400" />
      <div className="flex h-10 items-center text-lg">
        제목을 입력해 주세요.
      </div>
      <div>
        <Button classProp={'h-8 rounded-md'}>확인</Button>
      </div>
    </div>
  );
};

export default Alert;
