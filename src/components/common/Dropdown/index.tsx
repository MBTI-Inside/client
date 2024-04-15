import React, { useCallback } from 'react';

import useDetectClose from '@/hooks/useDetectClose';

import * as S from '@/components/common/Dropdown/styles';

interface DropdownProps {
  items: { id: number; label: string; onClick: () => void }[];
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ items, children }) => {
  const [isOpen, ref, toggleDropdown] = useDetectClose(false);

  const handleToggleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation(); // 이벤트 버블링을 중지
      toggleDropdown();
    },
    [toggleDropdown]
  );

  return (
    <div>
      <div onClick={handleToggleClick}>{children}</div>
      {isOpen && (
        <S.DropdownMenu ref={ref}>
          {items.map((item) => (
            <S.DropdownMenuItem
              key={item.id}
              onClick={() => {
                item.onClick(); // 아이템 클릭 시 실행될 로직
                toggleDropdown(); // 메뉴 아이템 클릭 후 드롭다운 닫기
              }}
            >
              {item.label}
            </S.DropdownMenuItem>
          ))}
        </S.DropdownMenu>
      )}
    </div>
  );
};

export default Dropdown;
