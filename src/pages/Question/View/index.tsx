import { Question } from '@/@types';
import axiosRequest from '@/api';
import { useEffect, useState } from 'react';

import useRouter from '@/hooks/useRouter';

import QuestionViewCard from '@/components/pages/Question/QuestionViewCard';
import QuestionViewHeader from '@/components/pages/Question/QuestionViewHeader';

import * as S from '@/pages/Question/View/styles';

const QuestionView = () => {
  const { params } = useRouter();
  const { id } = params as { id: string };
  const [question, setQuestion] = useState<Question>();

  const getQuestion = async (id: string) => {
    try {
      const response = await axiosRequest.requestAxios<Question>(
        'get',
        `/survey/questions/${id}` // sortType=desc&sortField=id
      );
      setQuestion(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getQuestion(id);
  }, []);

  return (
    <S.QuestionViewContainer>
      <QuestionViewHeader id={id} />
      <QuestionViewCard question={question} />
    </S.QuestionViewContainer>
  );
};

export default QuestionView;

// 테스트 목록페이지 -> 특정 테스트 페이지 -> 문항 목록 페이지 -> 문항 조회 페이지
// 특정 테스트에 대한 특정 문항을 조회한다. 수정, 삭제 버튼이 있으며 수정을 클릭하면 문항을 수정할 수 있다.
