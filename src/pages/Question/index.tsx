import { Question } from '@/@types/Question';
import axiosRequest from '@/api';
import axios from 'axios';

import Pagination from '@/components/common/Pagination';
import QuestionCard from '@/components/pages/Question/QuestionCard';
import QuestionHeader from '@/components/pages/Question/QuestionHeader';

import * as S from '@/pages/Question/styles';

const QuestionList = () => {
  const getQ = async () => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/survey/questions/66446ecf1f4e58c6cbd95de7`
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const getQuestionList = async () => {
    try {
      const response = await axiosRequest.requestAxios<any>(
        'get',
        '/survey/questions/66446ecf1f4e58c6cbd95de7'
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const del = async () => {
    try {
      const res = await axios.delete(
        `${
          import.meta.env.VITE_API_URL
        }/survey/questions/66446ecf1f4e58c6cbd95de7`
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const postTest = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/survey/compatibilities`,
        {
          type: 'good',
          mbti: 'ESTJ',
          targetMbti: 'INFP',
          description: 'CCCC'
        }
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  // postTest();
  // del();
  // getQ();
  // getQuestionList();

  return (
    <S.QuestionContainer>
      <QuestionHeader />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <Pagination />
    </S.QuestionContainer>
  );
};

export default QuestionList;
