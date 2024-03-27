import Character from '@/components/common/Character';
import Pagination from '@/components/common/Pagination';

const MyTestResultCard = () => {
  return (
    <section className="flex flex-col items-center justify-between bg-[#BF1132] shadow-xl p-5">
      <section className="flex flex-col p-4 items-center gap-2 bg-white rounded-xl">
        <div className="flex flex-row gap-3 w-full justify-around">
          <div className="flex flex-col items-center gap-1">
            <div
              className="radial-progress"
              style={{ '--value': 70, '--size': '4.4rem' }}
              role="progressbar"
            >
              70%
            </div>
            <span>E</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div
              className="radial-progress"
              style={{ '--value': 70, '--size': '4.4rem' }}
              role="progressbar"
            >
              70%
            </div>
            <span>S</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div
              className="radial-progress"
              style={{ '--value': 70, '--size': '4.4rem' }}
              role="progressbar"
            >
              70%
            </div>
            <span>T</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div
              className="radial-progress"
              style={{ '--value': 70, '--size': '4.4rem' }}
              role="progressbar"
            >
              70%
            </div>
            <span>J</span>
          </div>
        </div>
        <section className="p-2 w-full flex flex-col items-center gap-2">
          <h2 className="card-title">너는 엣티제야</h2>
          <h3>검사일자 : 2024-03-22 13:22:49</h3>
        </section>
      </section>
      <Pagination />
    </section>
  );
};

export default MyTestResultCard;
