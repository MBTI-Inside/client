import { Question } from '@/@types';
import axiosRequest from '@/api';
import { useEffect, useState } from 'react';

import QuestionCard from '@/components/pages/Question/QuestionCard';
import QuestionHeader from '@/components/pages/Question/QuestionHeader';

import * as S from '@/pages/Question/styles';

export interface QuestionProps {
  question: Question;
}

const QuestionList = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const getQuestionList = async () => {
    try {
      const response = await axiosRequest.requestAxios<Question[]>(
        'get',
        '/survey/questions?skip=0&limit=100' // sortType=desc&sortField=id
      );
      setQuestions(response);
    } catch (e) {
      console.log(e);
    }
  };

  // TODO: 공통 tanstack query 적용
  // TODO: 무한스크롤
  useEffect(() => {
    getQuestionList();
  }, []);

  return (
    <S.QuestionContainer>
      <QuestionHeader />
      {questions.map((question) => {
        return <QuestionCard key={question.createdAt} question={question} />;
      })}
      {/* TODO: Pagination 제거, 무한스크롤 적용 */}
      {/* <Pagination /> */}
    </S.QuestionContainer>
  );
};

export default QuestionList;
