import { CiMenuKebab } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io';

import * as S from '@/components/pages/Admin/Question/QuestionViewHeader/styles';

const QuestionViewHeader = () => {
  return (
    <section className="flex bg-white items-center w-full justify-between">
      <div className="pl-4 text-xl">
        <IoIosArrowBack onClick={() => {}} />
      </div>
      <span className="font-bold text-xl">Question</span>
      <S.DropDowns>
        <S.DropDownButton tabIndex={0} role="button">
          <CiMenuKebab />
        </S.DropDownButton>
        <S.DropDownContents tabIndex={0}>
          <li className="items-center">
            <a>수정</a>
          </li>
          <li className="items-center">
            <a>삭제</a>
          </li>
        </S.DropDownContents>
      </S.DropDowns>
    </section>
  );
};

export default QuestionViewHeader;
