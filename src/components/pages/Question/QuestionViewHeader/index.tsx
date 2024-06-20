import { Question } from '@/@types';
import axiosRequest from '@/api';
import { CiMenuKebab } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io';

import { useModalContext } from '@/hooks/useModal';
import useRouter from '@/hooks/useRouter';

import * as S from '@/components/pages/Question/QuestionViewHeader/styles';

import QuestionNote from '../QuestionNote';

interface QuestionViewHeaderProps {
  id: string;
}

const QuestionViewHeader = ({ id }: QuestionViewHeaderProps) => {
  const { goBack } = useRouter();
  const { openModal } = useModalContext();

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
          {/* TODO: 문항 수정 클릭 시 메뉴 닫히도록 적용, 수정할 데이터 조회 */}
          <li className="items-center">
            <a
              onClick={() => {
                openModal(<QuestionNote id={id} />, null, '문항 수정');
              }}
            >
              수정
            </a>
          </li>
          <li className="items-center">
            <a
              onClick={async () => {
                const response = await axiosRequest.requestAxios<Question>(
                  'delete',
                  `/survey/questions/${id}` // sortType=desc&sortField=id
                );
                console.log(response);
              }}
            >
              삭제
            </a>
          </li>
        </S.DropDownContents>
      </S.DropDowns>
    </S.QuestionViewHeaderContainer>
  );
};

export default QuestionViewHeader;
