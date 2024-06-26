import { IoHeartOutline } from 'react-icons/io5';
import { IoHeartSharp } from 'react-icons/io5';

import Button from '@/components/common/Button';
import * as S from '@/components/pages/Memo/MemoViewContent/styles';

const MemoViewContent = (params: any) => {
  const { id, title, content, like_count, cmt_count, userName, date } =
    params.data;

  return (
    <S.MemoViewContentContainer>
      <S.Title>{title}</S.Title>
      {/* TODO: 글자수 입력 제한 */}
      <S.Content>{content}</S.Content>
      <S.ContentInfo>
        <S.ContentGroup>
          <Button
            classProp="h-8 bg-green-700"
            onClick={() => alert('좋아요 클릭 or 취소')}
          >
            <IoHeartOutline />
            {/* <IoHeartSharp className="text-red-600" /> */}
            <span>{like_count}</span>
          </Button>
        </S.ContentGroup>
        <S.ContentGroup>
          <span className="text-sm">{userName}</span>
          <span className="text-xs">{date}</span>
        </S.ContentGroup>
      </S.ContentInfo>
    </S.MemoViewContentContainer>
  );
};

export default MemoViewContent;
