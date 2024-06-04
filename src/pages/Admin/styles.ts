import tw from 'tailwind-styled-components';

export const AdminContainer = tw.div`
    flex 
    flex-col 
    w-full 
    m-auto 
    pt-16
`;

export const ContentSection = tw.section`
    flex 
    flex-col 
    gap-4 
    p-5 
    bg-[#D5BA38]
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
