import tw from 'tailwind-styled-components';

interface ColorProps {
  bg: string;
}

export const NoteContainer = tw.div`
    flex-1
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
    input-bordered 
    w-full 
    outline-0 
    p-3 
    text-white 
    border-solid 
    border-white
`;

export const InputContent = tw.textarea`
    textarea 
    textarea-bordered 
    w-full 
    outline-0 
    h-80 
    resize-none 
    p-3 
    text-base 
    bg-inherit 
    text-white 
    border-solid 
    border-white
`;

export const MemoColor = tw.div<ColorProps>`
    w-5 
    h-5 
    ${(p) => (p.bg ? p.bg : p.bg)}
`;
