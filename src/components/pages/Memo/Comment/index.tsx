import { AiOutlineComment } from 'react-icons/ai';
import { CiMenuKebab } from 'react-icons/ci';
import { IoHeartOutline } from 'react-icons/io5';

import Button from '@/components/common/Button';
import CommentCard from '@/components/pages/Memo/Comment/CommentCard';
import CommentPost from '@/components/pages/Memo/Comment/CommentPost';
import * as S from '@/components/pages/Memo/Comment/index.styles';

const Comment = () => {
  return (
    <S.CommentContainer>
      <div className="flex items-center gap-2 text-xl">
        <span>댓글</span>
        <AiOutlineComment />
      </div>
      <CommentCard />
      <CommentCard />
      <CommentPost />
    </S.CommentContainer>
  );
};

export default Comment;
