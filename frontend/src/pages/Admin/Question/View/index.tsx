import { CiMenuKebab } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io';
import { SlArrowLeft } from 'react-icons/sl';
import tw from 'tailwind-styled-components';

import Button from '@/components/common/Button';
import QuestionCard from '@/components/pages/Admin/Question/QuestionCard';
import TestTitle from '@/components/pages/Test/Title';

const QuestionView = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 items-center ">
      <section className="flex bg-white items-center w-full justify-between">
        <div className="pl-4 text-xl">
          <IoIosArrowBack onClick={() => {}} />
        </div>
        <span className="font-bold text-xl">Question</span>
        <DropDowns>
          <DropDownButton tabIndex={0} role="button">
            <CiMenuKebab />
          </DropDownButton>
          <DropDownContents tabIndex={0}>
            <li className="items-center">
              <a>수정</a>
            </li>
            <li className="items-center">
              <a>삭제</a>
            </li>
          </DropDownContents>
        </DropDowns>
      </section>
      <section
        className="w-11/12 rounded-3xl
    bg-yellow-300 p-4 opacity-100
    flex flex-col flex-1 justify-evenly mb-4"
      >
        <section>
          <TestQuestion>
            친구와 1시간이 넘는 통화를 마친 뒤 당신의 상태는?
          </TestQuestion>
        </section>
        <section className="flex flex-col items-center">
          <div className="w-72 border font-bold min-h-[7.5rem] py-9 px-4 mb-5 text-left rounded-2xl bg-white text-black">
            남은 얘기는 만나서 해야징
          </div>
          <div className="w-72 border font-bold min-h-[7.5rem] py-9 px-4 mb-5 text-left rounded-2xl bg-white text-black">
            통화가 끝났으니 이제 쉬어야지..
          </div>
        </section>

        <section className="flex gap-2 justify-between items-center">
          <div className="font-bold text-2xl">문항 유형</div>
          <div className="font-bold text-2xl">E(energy)</div>
        </section>
        <section className="flex gap-2 items-center justify-between">
          <div className="font-bold text-lg">비중도</div>
          <progress
            className="progress progress-primary w-44 bg-yellow-200"
            value="73"
            max="100"
          ></progress>
          <div className="font-bold text-lg">73%</div>
        </section>
      </section>
    </main>
  );
};

export default QuestionView;

// 테스트 목록페이지 -> 특정 테스트 페이지 -> 문항 목록 페이지 -> 문항 조회 페이지
// 특정 테스트에 대한 특정 문항을 조회한다. 수정, 삭제 버튼이 있으며 수정을 클릭하면 문항을 수정할 수 있다.

const TestQuestion = tw.h3`
    text-center 
    text-xl 
    font-semibold 
`;
const DropDowns = tw.div`
dropdown 
dropdown-end
`;
const DropDownButton = tw.div`
btn 
m-1 
bg-inherit 
border-none 
text-xl
`;
const DropDownContents = tw.ul`
    dropdown-content 
    z-[1] 
    menu 
    p-2 
    shadow 
    bg-base-100 
    rounded-box 
    w-24
`;
