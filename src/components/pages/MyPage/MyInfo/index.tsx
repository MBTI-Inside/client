import { FaPencilAlt } from 'react-icons/fa';

import * as S from '@/components/pages/MyPage/MyInfo/styles';

const MyInfo = () => {
  return (
    <S.MyInfoContainer>
      <div className="avatar">
        <div className="w-20 rounded">
          <img src="https://avatars.githubusercontent.com/u/63568239?v=4" />
        </div>
      </div>
      <S.MyInfoAreaWrapper>
        <S.MyInfoArea>
          <div className="flex gap-1">
            <span className="font-bold">언정차</span>
            <span>님</span>
          </div>
          <FaPencilAlt className="text-lg" />
        </S.MyInfoArea>
        <div>MBTI : ESTJ</div>
      </S.MyInfoAreaWrapper>
    </S.MyInfoContainer>
  );
};

export default MyInfo;
