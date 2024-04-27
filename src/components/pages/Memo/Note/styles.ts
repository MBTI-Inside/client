import tw from 'tailwind-styled-components';

interface ColorProps {
  bg: string;
}

export const NoteFormContainer = tw.div`
    flex 
    flex-col 
    w-full 
    h-full 
    justify-center 
    gap-8
`;

export const Title = tw.div`
    text-4xl 
    font-bold 
    text-white
`;

export const InputTitle = tw.input`
    input 
    input-primary
    w-full 
    bg-inherit
    p-4
    text-white 
`;

export const InputContent = tw.textarea`
    textarea 
    textarea-primary 
    w-full 
    h-80 
    p-4
    text-base 
    bg-inherit 
    text-white 
`;

export const MemoColor = tw.div<ColorProps>`
    w-5 
    h-5 
    ${(p) => (p.bg ? p.bg : p.bg)}
`;
