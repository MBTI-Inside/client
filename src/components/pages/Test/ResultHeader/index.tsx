import Button from '@/components/common/Button';
import * as S from '@/components/pages/Test/ResultHeader/styles';

const ResultHeader = () => {
  // Web Share API 적용
  const handleShareClick = async () => {
    // TODO: 배포 후 모바일 환경에서 확인할 것.
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: '링크를 공유합니다.',
          url: window.location.href
        });
        console.log('링크를 공유했습니다!');
      } catch (error) {
        // TODO: error 처리
        console.error('링크 공유에 실패했습니다.', error);
      }
    } else {
      // Web Share API를 지원하지 않는 경우
      // 대체 동작을 수행합니다.
      await share(window.location.origin);
    }
  };

  const share = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('링크가 복사되었습니다!');
    } catch (e) {
      // TODO: error 처리
      alert('초대코드 복사에 실패했습니다ㅜㅜ');
    }
  };

  return (
    <S.ResultHeaderContainer>
      {/* TODO: MBTI Type props로 받기 */}
      <p className="font-bold text-5xl text-white">ESTJ</p>
      {/* TODO: share link */}
      <Button onClick={handleShareClick}>결과 공유하기</Button>
    </S.ResultHeaderContainer>
  );
};

export default ResultHeader;
