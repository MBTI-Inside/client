import { MemoPost } from '@/@types';
import { useMemo } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { useModalContext } from '@/hooks/useModal';

import Dropdown from '@/components/common/Dropdown';
import Left from '@/components/layout/Header/Left';
import Middle from '@/components/layout/Header/Middle';
import Right from '@/components/layout/Header/Right';
import * as S from '@/components/pages/Memo/MemoViewHeader/index.styles';

interface MemoViewHeaderProps {
  memo: MemoPost;
}

const MemoViewHeader = ({ memo }: MemoViewHeaderProps) => {
  const nav = useNavigate();
  const { openModal } = useModalContext();

  const menuItems = useMemo(() => {
    const items = [
      {
        id: 1,
        label: '수정',
        onClick: () => {
          openModal(<>test</>, null, '암호 입력').then((result) =>
            console.log(result)
          );
        }
      },
      {
        id: 2,
        label: '삭제',
        onClick: () => {
          openModal(<>test</>, null, '암호 입력').then((result) =>
            console.log(result)
          );
        }
      }
    ];
    return items;
  }, []);

  return (
    <S.MemoViewHeaderContainer>
      <Left>
        <IoIosArrowBack onClick={() => nav(-1)} />
      </Left>
      <Middle>ESTJ</Middle>
      <Right>
        <Dropdown items={menuItems}>
          <CiMenuKebab size={28} />
        </Dropdown>
      </Right>
    </S.MemoViewHeaderContainer>
  );
};

export default MemoViewHeader;
