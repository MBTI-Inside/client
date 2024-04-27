import { AiOutlineComment } from 'react-icons/ai';
import { CiMenuKebab } from 'react-icons/ci';

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
      <div className="flex flex-col p-4 shadow-xl bg-green-200 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              className="avatar w-8 rounded-full"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
            <span>닉네임</span>
          </div>
          <CiMenuKebab />
        </div>
        {/* TODO: 글자수 입력 제한 */}
        <div className="line-clamp-4">
          comment comment commentcomment comment commentcomment comment
          commentcomment comment commentcomment comment comment comment comment
          commentcomment comment commentcomment comment commentcomment comment
          commentcomment comment comment comment comment commentcomment comment
          commentcomment comment commentcomment comment commentcomment comment
          comment
        </div>
      </div>
      <CommentCard />
      <CommentPost />
    </S.CommentContainer>
  );
};

export default Comment;
