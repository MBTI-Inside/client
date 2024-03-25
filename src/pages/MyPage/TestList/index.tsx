import { CiMenuKebab } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io';

import Character from '@/components/common/Character';
import Pagination from '@/components/common/Pagination';
import * as S from '@/components/pages/Admin/Question/QuestionViewHeader/styles';

const MyTestList = () => {
  return (
    <>
      <S.QuestionViewHeaderContainer>
        <div className="pl-4 text-xl">
          <IoIosArrowBack onClick={() => {}} />
        </div>
        <span className="font-bold text-xl">내 MBTI</span>
        <div>ㄱ</div>
      </S.QuestionViewHeaderContainer>

      <div className="card w-5/6 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Character bgcolor="#BF1132" gcolor="#FF98CA" />
        </figure>
        <div className="card-body items-center text-center">
          <progress className="progress" value="10" max="100" />
          <progress className="progress" value="10" max="100" />
          <progress className="progress" value="10" max="100" />
          결과 영역
          <h2 className="card-title">너는 엣티제야</h2>
          <h3>검사일자 : 2024-03-22 13:22:49</h3>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default MyTestList;
// 내가 테스트한 목록을 보여줌
