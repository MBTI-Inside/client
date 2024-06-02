import tw from 'tailwind-styled-components';

export const UserCardContainer = tw.section`
    flex 
    flex-row 
    bg-white 
    items-center 
    justify-around 
    w-5/6 
    h-32 
    gap-2 
    rounded-lg
`;

export const UserInfo = tw.div`
    flex 
    flex-col 
    gap-2 
    justify-end
`;

export const UserData = tw.div`
    flex
    gap-1 
    justify-end
`;
