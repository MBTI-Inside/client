import { Question } from '@/@types';
import { Answer } from '@/@types/Question';
import axiosRequest from '@/api';
import { useCustomMutation, useCustomQuery } from '@/hooks';
import { calculateMbtiProportion, determineMBTI } from '@/utils';
import { useEffect, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import useRouter from '@/hooks/useRouter';

import Button from '@/components/common/Button';
import ProgressBar from '@/components/pages/Test/ProgressBar';
import TestTitle from '@/components/pages/Test/Title';

import * as S from '@/pages/Test/styles';

import { MBTIDatasOption } from '@/constants/MBTIOptions';

export interface MBTITypeAnswer extends Answer {
  mbtiType: keyof MBTIDatasOption;
}

const Test = () => {
  const { data: questions } = useCustomQuery(['get-survey-questions'], {
    method: 'get',
    url: '/surveys/mbti/test',
    queryFn: () =>
      axiosRequest.requestAxios<Question[]>('get', '/surveys/mbti/test'),
    options: {
      staleTime: 1000 * 5 * 60
    }
  });

  const { mutate } = useCustomMutation(['get-survey-questions'], {
    method: 'patch'
  });

  const { navigateTo } = useRouter();

  // answers를 Answer 타입의 배열로 정의
  const [answers, setAnswers] = useState<MBTITypeAnswer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // 첫 질문을 초기화
  useEffect(() => {
    if (questions && questions.length > 0) {
      setCurrentQuestionIndex(0);
      setSelectedOption(null); // 처음엔 선택 옵션 없음
    }
  }, [questions]);

  // 현재 질문에 답변이 저장되었는지 확인
  const isNextButtonDisabled = selectedOption === null;

  // 모든 질문에 대한 답변이 완료되었는지 확인
  const isAllQuestionsAnswered = answers.length === questions?.length;

  // 다음 질문으로 이동
  const handleNextQuestion = () => {
    if (questions && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // 다음 질문으로 넘어가면 선택 초기화
    }
  };

  // 이전 질문으로 이동
  const handlePreviousQuestion = () => {
    if (questions && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(answers[currentQuestionIndex - 1]?.proportion || null);
    }
  };

  // 답변 선택 시 상태 업데이트
  const handleSelectOption = (optionIndex: number) => {
    if (!questions || !questions[currentQuestionIndex]) {
      return; // 질문 데이터가 없는 경우 함수 종료
    }

    setSelectedOption(optionIndex);

    // 현재 선택된 질문의 답변 객체 생성
    const selectedAnswer: MBTITypeAnswer = {
      mbtiType: questions[currentQuestionIndex].mbtiType,
      type: questions[currentQuestionIndex].answer[optionIndex - 1].type,
      content: questions[currentQuestionIndex].answer[optionIndex - 1].content,
      proportion:
        questions[currentQuestionIndex].answer[optionIndex - 1].proportion
    };

    // 기존의 answers 상태를 복사하고, 현재 질문에 대한 답변을 추가/수정
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionIndex] = selectedAnswer; // 해당 질문에 대한 답변 업데이트
      return updatedAnswers;
    });
  };

  // 제출 버튼 클릭 시 실행될 함수
  const handleSubmit = () => {
    // 모든 답변 데이터를 서버로 제출
    const mbtiResult = calculateMbtiProportion(answers);
    const mbtiTypeResult = determineMBTI(mbtiResult);

    mutate(
      {
        url: `/mbtis/${mbtiTypeResult}` // 동적 URL
      },
      {
        onSuccess: (data) => {
          // TODO: 로딩 좀 걸어주면 좋을 것 같은뎅..
          navigateTo(`/result/${mbtiTypeResult}`, mbtiResult);
        },
        onError: (error) => {
          throw error;
        }
      }
    );
  };

  return (
    <S.TestContainer>
      {questions && questions.length > 0 && (
        <>
          <TestTitle
            title={questions[currentQuestionIndex].subject}
            seq={(currentQuestionIndex + 1).toString().padStart(2, '0')}
          />
          <S.TestContent>
            <Button
              classProp={`w-full h-28 p-4 rounded-2xl text-black ${
                selectedOption === 1 ? 'bg-blue-500 text-white' : 'bg-white'
              }`}
              onClick={() => handleSelectOption(1)}
            >
              {questions[currentQuestionIndex].answer[0].content}
            </Button>
            <Button
              classProp={`w-full h-28 p-4 rounded-2xl text-black ${
                selectedOption === 2 ? 'bg-blue-500 text-white' : 'bg-white'
              }`}
              onClick={() => handleSelectOption(2)}
            >
              {questions[currentQuestionIndex].answer[1].content}
            </Button>
          </S.TestContent>
          <S.TestNavigation>
            <Button
              classProp="bg-secondary text-white w-32"
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              <div className="flex justify-evenly w-full">
                <SlArrowLeft />
                <span>이전</span>
              </div>
            </Button>

            {currentQuestionIndex < questions.length - 1 ? (
              // 다음 버튼
              <Button
                classProp="bg-primary text-white w-32"
                onClick={handleNextQuestion}
                disabled={isNextButtonDisabled}
              >
                <div className="flex justify-evenly w-full">
                  <span>다음</span>
                  <SlArrowRight />
                </div>
              </Button>
            ) : (
              // 제출 버튼 (모든 문항을 선택했을 때만 활성화)
              <Button
                classProp="bg-green-500 text-white w-32"
                onClick={handleSubmit}
                disabled={!isAllQuestionsAnswered}
              >
                <div className="flex justify-evenly w-full">
                  <span>제출</span>
                </div>
              </Button>
            )}
          </S.TestNavigation>
          <ProgressBar
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
          />
        </>
      )}
    </S.TestContainer>
  );
};

export default Test;
