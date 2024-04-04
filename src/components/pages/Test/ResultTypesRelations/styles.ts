import tw from 'tailwind-styled-components';

interface RelationColorProps {
  isGood: boolean;
}

export const ResultTypeRelationsContainer = tw.div`
    flex 
    flex-col 
    items-center 
    text-black 
    bg-white 
    rounded-xl 
    w-5/6 
    p-4 
    gap-2
`;

export const TypeRelationsHeader = tw.header`
    text-3xl 
    font-bold 
    text-black 
    text-center
`;

export const RelationsContainer = tw.div<RelationColorProps>`
    flex 
    flex-col 
    items-center 
    gap-2 
    ${(bg) => (bg.isGood ? 'bg-pink-100' : 'bg-blue-100')} 
    rounded-lg 
    p-4 
    w-11/12
`;
