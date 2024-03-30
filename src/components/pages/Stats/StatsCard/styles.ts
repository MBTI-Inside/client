import tw from 'tailwind-styled-components';

export const StatsCardContainer = tw.section`
    flex 
    flex-col 
    items-center 
    justify-center 
    bg-yellow-500 
    w-11/12 
    p-2 
    gap-2 
    rounded-2xl
`;
export const StatsQuestionHeader = tw.div`
    flex 
    gap-2 
    w-full
`;

export const Badge = tw.div`
  badge 
  badge-secondary 
  m-1
  bg-primary 
  border-0 
  w-1/12
`;

export const ProgressWrapper = tw.div`
    flex 
    w-11/12 
    items-center
`;

export const AnswerContainer = tw.div`
    flex 
    flex-row 
    items-center 
    justify-center 
    gap-4 
    w-full
`;
