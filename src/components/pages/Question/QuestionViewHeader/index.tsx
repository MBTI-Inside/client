import { CiMenuKebab } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io';

import useRouter from '@/hooks/useRouter';

import * as S from '@/components/pages/Question/QuestionViewHeader/styles';

const QuestionViewHeader = () => {
  const { goBack } = useRouter();

  return (
    <S.QuestionViewHeaderContainer>
      <div className="pl-4 text-xl">
        <IoIosArrowBack
          onClick={() => {
            goBack();
          }}
        />
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
    </S.QuestionViewHeaderContainer>
  );
};

export default QuestionViewHeader;
