import tw from 'tailwind-styled-components';

export const CommentCardContainer = tw.section`
    flex 
    items-start 
    justify-center 
    w-full 
    gap-2 
    bg-green-200 
    rounded-xl 
    p-4
`;

export const CommentArea = tw.div`
    flex 
    flex-col 
    gap-1
`;

export const CommentReact = tw.div`
    flex 
    gap-2 
    items-center
`;
