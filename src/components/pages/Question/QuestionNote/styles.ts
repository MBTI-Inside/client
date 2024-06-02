import tw from 'tailwind-styled-components';

export const NoteContainer = tw.div`
     flex 
    flex-col 
    w-full 
    h-full 
    justify-center 
    gap-6
`;

export const NoteHeader = tw.header`
    flex 
    mb-4 
    items-center 
    justify-between 
    px-4
`;

export const Title = tw.div`
    text-4xl 
    font-bold 
    text-white
`;

export const InputTitle = tw.input`
     input 
    input-accent
    w-full 
    bg-inherit
    p-4
    text-white 
`;

export const InputContent = tw.textarea`
    textarea  
    w-full 
    h-32 
    p-4
    text-base 
    bg-inherit 
    text-white 
`;
