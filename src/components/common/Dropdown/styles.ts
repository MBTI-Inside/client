import tw from 'tailwind-styled-components';

export const DropdownMenu = tw.section`
    absolute 
    mt-2 
    z-50 
    w-max 
    rounded-md 
    bg-white 
    shadow-lg 
    border 
    border-gray-200
    right-4 // 오른쪽에서 약간 안쪽으로 여백
    min-w-[80px] // 최소 너비 설정
    max-w-[calc(100vw-40px)] // 화면 끝에서 약간 안쪽으로 제한
    overflow-hidden
`;

export const DropdownMenuItem = tw.div`
    flex 
    items-center 
    justify-center 
    text-gray-700 
    hover:bg-gray-100 
    cursor-pointer 
    p-2 
    rounded-md
    text-center
`;
