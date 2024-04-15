import tw from 'tailwind-styled-components';

export const HomeContainer = tw.div`
bg-[#0272F1]
w-full
m-auto
pt-16
flex
flex-col
`;

export const ContentSection = tw.section`
    flex
    flex-col
    gap-4
    bg-[#B2ACF9]
    p-5
`;

export const Title = tw.h3`
    font-bold
    text-5xl
    text-center
    text-black
`;

export const ButtonGroup = tw.section`
    flex
    flex-col
    w-full
    items-center
    gap-2
`;
