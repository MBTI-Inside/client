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
      <span className="pr-4 text-xl">&nbsp;</span>
    </S.QuestionViewHeaderContainer>
  );
};

export default QuestionViewHeader;
