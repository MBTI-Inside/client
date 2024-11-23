import { MemoPost } from '@/@types';
import { useCustomMutation } from '@/hooks';
import dayjs from 'dayjs';
import { IoHeartOutline } from 'react-icons/io5';
import { IoHeartSharp } from 'react-icons/io5';

import { useHandleError } from '@/hooks/useHandleError';

import Button from '@/components/common/Button';
import * as S from '@/components/pages/Memo/MemoViewContent/styles';

interface MemoViewContentProps {
  memo: MemoPost;
}

const MemoViewContent = ({ memo }: MemoViewContentProps) => {
  const setError = useHandleError(); // 에러 핸들링 함수
  const {
    _id,
    title,
    content,
    mbtiType,
    cardColor,
    likeCount,
    cmtCount,
    createdAt
  } = memo;

  const { mutate } = useCustomMutation(['get-memo'], {
    method: 'patch'
  });

  const handleClickLike = (id: string) => {
    mutate(
      {
        url: `/memos/${id}/like` // 동적 URL
      },
      {
        onSuccess: () => {},
        onError: (error) => {
          setError(error);
        }
      }
    );
  };

  return (
    <S.MemoViewContentContainer>
      <S.Title>{title}</S.Title>
      {/* TODO: 글자수 입력 제한 */}
      <S.Content>{content}</S.Content>
      <S.ContentInfo>
        <S.ContentGroup>
          <Button
            classProp={`h-8 ${cardColor}`}
            onClick={() => handleClickLike(_id)}
          >
            <IoHeartOutline />
            <span>{likeCount}</span>
          </Button>
        </S.ContentGroup>
        <S.ContentGroup>
          <span className="text-xs">
            {dayjs(createdAt).format('YYYY-MM-DD HH:mm').toString()}
          </span>
        </S.ContentGroup>
      </S.ContentInfo>
    </S.MemoViewContentContainer>
  );
};

export default MemoViewContent;
