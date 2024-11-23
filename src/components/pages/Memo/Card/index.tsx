import { MemoPost } from '@/@types';
import { useCustomMutation } from '@/hooks';
import dayjs from 'dayjs';
import { AiOutlineComment } from 'react-icons/ai';
import { IoHeartOutline } from 'react-icons/io5';

import { useHandleError } from '@/hooks/useHandleError';
import useRouter from '@/hooks/useRouter';

import * as S from '@/components/pages/Memo/Card/index.styles';

export interface CardProps {
  memo: MemoPost;
}

const Card = ({ memo }: CardProps) => {
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
  const setError = useHandleError(); // 에러 핸들링 함수
  const { navigateTo } = useRouter();

  const { mutate } = useCustomMutation(['get-memos'], {
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
    <S.CardWrapper cardColor={cardColor}>
      <S.CardBody>
        <article onClick={() => navigateTo(`/memo-view/${_id}`)}>
          <S.Title>{title}</S.Title>
          <S.Content>{content}</S.Content>
        </article>
        <S.CardInfoContainer>
          <S.MemoDate>
            {dayjs(createdAt).format('YYYY-MM-DD HH:mm').toString()}
          </S.MemoDate>
          <hr />
          <S.CardInfo>
            <div className="font-bold">{mbtiType}</div>
            <S.HistoryContainer>
              <S.History>
                <IoHeartOutline
                  className="cursor-pointer"
                  onClick={() => handleClickLike(_id)}
                />
                <span>{likeCount}</span>
              </S.History>
              <S.History>
                <AiOutlineComment />
                <span>{cmtCount}</span>
              </S.History>
            </S.HistoryContainer>
          </S.CardInfo>
        </S.CardInfoContainer>
      </S.CardBody>
    </S.CardWrapper>
  );
};

export default Card;
// 메모장의 한 게시글(메모)
