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
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            border: '1px solid black'
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                item.onClick(); // 아이템 클릭시 실행될 로직
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
