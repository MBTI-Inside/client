import React, { useCallback } from 'react';

import useDetectClose from '@/hooks/useDetectClose';

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
        <div
          ref={ref}
          className="absolute mt-2 z-50 w-auto rounded-md bg-white shadow-lg border border-gray-200"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="text-gray-700 hover:bg-gray-100 cursor-pointer p-2 rounded-md"
              onClick={() => {
                item.onClick(); // 아이템 클릭 시 실행될 로직
                toggleDropdown(); // 메뉴 아이템 클릭 후 드롭다운 닫기
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
