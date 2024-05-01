import tw from 'tailwind-styled-components';

export const MemoViewContentContainer = tw.section`
    card 
    w-11/12 
    p-6 
    h-96
    bg-white 
    justify-between 
    shadow-xl 
    bg-opacity-30
`;

export const Title = tw.h2`
    card-title 
    line-clamp-2
`;

export const Content = tw.div`
    line-clamp-8
`;

export const ContentInfo = tw.section`
    flex 
    justify-between 
    items-center
    gap-8
`;

export const ContentGroup = tw.div`
    flex 
    flex-col
    items-end
`;
