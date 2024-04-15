import React from 'react';

import useDetectClose from '@/hooks/useDetectClose';

interface DropdownProps {
  items: { id: number; label: string; onClick: () => void }[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, ref, toggleDropdown] = useDetectClose(false);

  const handleToggleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // 이벤트 버블링을 중지
    toggleDropdown();
  };

  return (
    <div>
      <button onClick={handleToggleClick}>Toggle Dropdown</button>
      {isOpen && (
        <div
          ref={ref}
          className="relative mt-2 w-auto rounded-md bg-white shadow-lg border border-gray-200"
          style={{ zIndex: 11250 }} // 필요한 경우 zIndex 조정
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
