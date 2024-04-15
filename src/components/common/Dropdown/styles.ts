import tw from 'tailwind-styled-components';

export const DropdownMenu = tw.section`
    absolute 
    mt-2 
    z-50 
    w-auto 
    rounded-md 
    bg-white 
    shadow-lg 
    border 
    border-gray-200
`;

export const DropdownMenuItem = tw.div`
    text-gray-700 
    hover:bg-gray-100 
    cursor-pointer 
    p-2 
    rounded-md
`;
