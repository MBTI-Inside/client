import tw from 'tailwind-styled-components';

export const MyInfoContainer = tw.div`
    flex 
    flex-row 
    bg-white 
    items-center 
    justify-around 
    w-full 
    h-32 
    gap-2 
    rounded-lg
`;

export const MyInfoAreaWrapper = tw.section`
    flex 
    flex-col 
    gap-4
`;

export const MyInfoArea = tw.section`
    flex 
    justify-end 
    items-center 
    gap-2
`;
