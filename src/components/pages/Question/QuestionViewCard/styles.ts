import tw from 'tailwind-styled-components';

export const QuestionViewCardContainer = tw.section`
    w-11/12 
    rounded-3xl
    bg-yellow-300 
    p-4 
    opacity-100
    flex 
    flex-col 
    flex-1 
    justify-evenly 
    mb-4
`;

export const TestQuestion = tw.h3`
    text-center 
    text-xl 
    font-semibold 
`;

export const AnswerSection = tw.section`
    flex 
    flex-col 
    items-center
`;

export const AnswerCard = tw.div`
    w-full
    border 
    font-bold 
    min-h-[7.5rem] 
    py-9 
    px-4 
    mb-5 
    text-left 
    rounded-2xl 
    bg-white 
    text-black
`;

export const QuestionType = tw.section`
    flex 
    gap-2 
    justify-evenly 
    items-center
`;
