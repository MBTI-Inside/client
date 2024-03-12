import QuestionHeader from '@/components/pages/Admin/Question/QuestionHeader';

const QuestionList = () => {
  return (
    <div className="flex flex-col items-center">
      <QuestionHeader />

      <section className="flex flex-col gap-2">
        <div>
          <div className="card w-80 bg-base-100 shadow-xl p-4 flex-row gap-1 items-center">
            <div className="badge w-8 h-8 justify-center items-center text-xl">
              E
            </div>
            <div className="line-clamp-2">
              바쁜 회사 생활을 보낸 당신. 황금 같은 주말을 어떻게 보내려고 할까?
            </div>
            <div className="w-8">76%</div>
          </div>
        </div>
        <div>
          <div className="card w-80 bg-base-100 shadow-xl p-4 flex-row gap-1 items-center">
            <div className="badge w-8 h-8 justify-center items-center text-xl">
              E
            </div>
            <div className="line-clamp-2">
              바쁜 회사 생활을 보낸 당신. 황금 같은 주말을 어떻게 보내려고 할까?
            </div>
            <div className="w-8">76%</div>
          </div>
        </div>
        <div>
          <div className="card w-80 bg-base-100 shadow-xl p-4 flex-row gap-1 items-center">
            <div className="badge w-8 h-8 justify-center items-center text-xl">
              E
            </div>
            <div className="line-clamp-2">
              바쁜 회사 생활을 보낸 당신. 황금 같은 주말을 어떻게 보내려고 할까?
            </div>
            <div className="w-8">76%</div>
          </div>
        </div>
        <div>
          <div className="card w-80 bg-base-100 shadow-xl p-4 flex-row gap-1 items-center">
            <div className="badge w-8 h-8 justify-center items-center text-xl">
              E
            </div>
            <div className="line-clamp-2">
              바쁜 회사 생활을 보낸 당신. 황금 같은 주말을 어떻게 보내려고 할까?
            </div>
            <div className="w-8">76%</div>
          </div>
        </div>
        <div>
          <div className="card w-80 bg-base-100 shadow-xl p-4 flex-row gap-1 items-center">
            <div className="badge w-8 h-8 justify-center items-center text-xl">
              E
            </div>
            <div className="line-clamp-2">
              바쁜 회사 생활을 보낸 당신. 황금 같은 주말을 어떻게 보내려고 할까?
            </div>
            <div className="w-8">76%</div>
          </div>
        </div>
        <div className="join mt-4 w-80 flex justify-center">
          <button className="join-item btn btn-md">{'<'}</button>
          <button className="join-item btn btn-md">1</button>
          <button className="join-item btn btn-md btn-active">2</button>
          <button className="join-item btn btn-md">3</button>
          <button className="join-item btn btn-md">4</button>
          <button className="join-item btn btn-md">5</button>
          <button className="join-item btn btn-md">{'>'}</button>
        </div>
      </section>
    </div>
  );
};

export default QuestionList;

// 특정 테스트에 대해 문항들을 목록으로 보여준다.
// 문항을 클릭하여 상세 페이지로 이동한다.
