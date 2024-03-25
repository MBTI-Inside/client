import tw from 'tailwind-styled-components';

export const MyPageContainer = tw.div`
    w-full 
    h-full
    pt-10
    flex
    flex-col
    flex-1
    content-center
`;

export const MyPageSectionWrapper = tw.section`
    bg-[#0272F1] 
    flex 
    justify-center
`;

export const MyPageSection = tw.section`
    flex 
    flex-col 
    w-5/6 
    items-center 
    justify-center 
    gap-10 
    mb-10
`;
