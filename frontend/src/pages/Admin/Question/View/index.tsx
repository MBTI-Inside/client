import { CiMenuKebab } from 'react-icons/ci';
import { SlArrowLeft } from 'react-icons/sl';

import Button from '@/components/common/Button';

const QuestionView = () => {
  return (
    <main className="flex flex-1 flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <Button classProp="btn-outline border-none">
          <SlArrowLeft />
        </Button>
        <span>Question</span>
        <Button classProp="btn-outline border-none">
          <CiMenuKebab />
        </Button>
      </div>
      <section
        className="w-[330px] rounded-3xl h-[80%]
    bg-yellow-300 p-4 opacity-100 flex-1
    flex flex-col"
      >
        <section>
          <div>질문</div>
          <div>
            바쁜 회사 생활을 보낸 당신. 황금 같은 주말을 어떻게 보내려고 할까?
          </div>
        </section>
        <section>
          <div>답변</div>
          <div>집에서 놀아야지!</div>
          <div>밖에서 놀아야지!</div>
        </section>

        <section>
          <div>문항 유형</div>
          <div>E(energy)</div>
        </section>
        <section>
          <div>비중도</div>
          <progress
            className="progress progress-primary w-56 bg-yellow-200"
            value="73"
            max="100"
          ></progress>
          <div>73%</div>
        </section>
      </section>
    </main>
  );
};

export default QuestionView;

// 테스트 목록페이지 -> 특정 테스트 페이지 -> 문항 목록 페이지 -> 문항 조회 페이지
// 특정 테스트에 대한 특정 문항을 조회한다. 수정, 삭제 버튼이 있으며 수정을 클릭하면 문항을 수정할 수 있다.
