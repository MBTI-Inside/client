import Pagination from '@/components/common/Pagination';
import * as S from '@/components/pages/MyPage/MyTestResultCard/styles';

const MyTestResultCard = () => {
  return (
    <S.MyTestResultCardContainer>
      <S.MyTestStatisticContainer>
        <S.MyTestStatisticInfo>
          <S.MyTestRadialProgress>
            <div
              className="radial-progress"
              style={{ '--value': 70, '--size': '4.4rem' }}
              role="progressbar"
            >
              70%
            </div>
            <span>E</span>
          </S.MyTestRadialProgress>
          <S.MyTestRadialProgress>
            <div
              className="radial-progress"
              style={{ '--value': 70, '--size': '4.4rem' }}
              role="progressbar"
            >
              70%
            </div>
            <span>S</span>
          </S.MyTestRadialProgress>
          <S.MyTestRadialProgress>
            <div
              className="radial-progress"
              style={{ '--value': 70, '--size': '4.4rem' }}
              role="progressbar"
            >
              70%
            </div>
            <span>T</span>
          </S.MyTestRadialProgress>
          <S.MyTestRadialProgress>
            <div
              className="radial-progress"
              style={{ '--value': 70, '--size': '4.4rem' }}
              role="progressbar"
            >
              70%
            </div>
            <span>J</span>
          </S.MyTestRadialProgress>
        </S.MyTestStatisticInfo>
        <S.MyTestResultInfo>
          <h2 className="card-title">너는 엣티제야</h2>
          <h3>검사일자 : 2024-03-22 13:22:49</h3>
        </S.MyTestResultInfo>
      </S.MyTestStatisticContainer>
      <Pagination />
    </S.MyTestResultCardContainer>
  );
};

export default MyTestResultCard;
