import { CiMenuKebab } from 'react-icons/ci';
import { GrAdobeCreativeCloud } from 'react-icons/gr';
import { IoIosArrowBack } from 'react-icons/io';

import Character from '@/components/common/Character';
import Pagination from '@/components/common/Pagination';
import * as S from '@/components/pages/Admin/Question/QuestionViewHeader/styles';

const MyTestList = () => {
  return (
    <main className="flex flex-1 flex-col gap-3 items-center">
      <div className="flex items-center w-full justify-between h-12">
        <div className="text-xl text-white">
          <IoIosArrowBack onClick={() => {}} />
        </div>
        <span className="font-bold text-xl text-white">내 MBTI</span>
        <div className="text-xl text-white">
          <GrAdobeCreativeCloud />
        </div>
      </div>
      <section className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Character bgcolor="#BF1132" gcolor="#FF98CA" />
        </figure>
        <section className="flex flex-col p-4 items-center gap-2">
          <div className="flex flex-row gap-3 w-full justify-around">
            <div className="flex flex-col items-center gap-1">
              <div
                className="radial-progress"
                style={{ '--value': 70, '--size': '4rem' }}
                role="progressbar"
              >
                70%
              </div>
              <span>E</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div
                className="radial-progress"
                style={{ '--value': 70, '--size': '4rem' }}
                role="progressbar"
              >
                70%
              </div>
              <span>S</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div
                className="radial-progress"
                style={{ '--value': 70, '--size': '4rem' }}
                role="progressbar"
              >
                70%
              </div>
              <span>T</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div
                className="radial-progress"
                style={{ '--value': 70, '--size': '4rem' }}
                role="progressbar"
              >
                70%
              </div>
              <span>J</span>
            </div>
          </div>

          {/* <div className="flex w-full gap-2 items-center">
            <span>E</span>
            <progress className="progress" value="53" max="100" />
            <span>I</span>
          </div>
          <div className="flex w-full gap-2 items-center">
            <span>E</span>
            <progress className="progress" value="42" max="100" />
            <span>I</span>
          </div>
          <div className="flex w-full gap-2 items-center">
            <span>E</span>
            <progress className="progress" value="88" max="100" />
            <span>I</span>
          </div>
          <div className="flex w-full gap-2 items-center">
            <span>E</span>
            <progress className="progress" value="75" max="100" />
            <span>I</span>
          </div> */}
          <h2 className="card-title">너는 엣티제야</h2>
          <h3>검사일자 : 2024-03-22 13:22:49</h3>
        </section>
      </section>
      <Pagination />
    </main>
  );
};

export default MyTestList;
// 내가 테스트한 목록을 보여줌
