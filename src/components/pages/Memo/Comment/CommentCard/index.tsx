import { CiMenuKebab } from 'react-icons/ci';
import { IoHeartOutline } from 'react-icons/io5';

import Button from '@/components/common/Button';
import * as S from '@/components/pages/Memo/Comment/CommentCard/styles';

const CommentCard = () => {
  return (
    <S.CommentCardContainer>
      <div className="avatar flex-col">
        <div className="w-12 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <S.CommentArea>
        <div className="font-bold">언제정신차릴래ㅠㅠ</div>
        <div className="break-all">
          commentcommentcommentcommentcommentcommentcommentcomment
          commentcomment comment commentcomment comment comment
        </div>
        <S.CommentReact>
          <Button
            classProp="w-16 h-6 rounded-none bg-green-700 bg-opacity-30"
            onClick={() => {
              console.log('좋아요');
            }}
          >
            <IoHeartOutline />
            {/* <IoHeartSharp className="text-red-600" /> */}
            <span>3</span>
          </Button>
          <Button classProp="w-16 h-6 rounded-none bg-green-700 bg-opacity-30">
            답글
          </Button>
          <span className="text-xs">2024-02-14 17:18</span>
        </S.CommentReact>
      </S.CommentArea>
      <div className="text-xl">
        <CiMenuKebab
          onClick={() => {
            console.log('asdf');
          }}
        />
      </div>
    </S.CommentCardContainer>
  );
};

export default CommentCard;
