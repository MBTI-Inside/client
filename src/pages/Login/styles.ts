import tw from 'tailwind-styled-components';

export const LoginContainer = tw.div`
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
    p-5
    bg-[#FF42B3]
`;

export const Title = tw.h3`
    font-bold
    text-4xl
    text-center
    text-black
`;

export const ButtonGroup = tw.section`
    flex 
    flex-col 
    items-center 
    gap-5
`;

export const LoginText = tw.span`
    text-md 
    w-32 
    text-center
`;
