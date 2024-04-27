import { useMemo } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import Left from '@/components/layout/Header/Left';
import Middle from '@/components/layout/Header/Middle';
import Right from '@/components/layout/Header/Right';
import * as S from '@/components/pages/Memo/MemoViewHeader/index.styles';

const MemoViewHeader = () => {
  const nav = useNavigate();

  const menuItems = useMemo(() => {
    const items = [
      { id: 1, label: '내정보', onClick: () => {} },
      { id: 2, label: '로그아웃', onClick: () => {} }
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
        <CiMenuKebab
          onClick={() => {
            console.log('11');
          }}
        />
      </Right>
      {/* <Dropdown items={menuItems}> */}
      {/* <S.MenuIcon /> */}
      {/* </Dropdown> */}
    </S.MemoViewHeaderContainer>
  );
};

export default MemoViewHeader;
