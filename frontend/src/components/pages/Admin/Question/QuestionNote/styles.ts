import tw from 'tailwind-styled-components';

export const NoteContainer = tw.div`
    flex
    flex-col
    w-full
    bg-black
`;

export const NoteHeader = tw.header`
    flex 
    mb-4 
    items-center 
    justify-between 
    px-4
`;

export const InputForm = tw.form`
    flex 
    flex-col 
    flex-1 
    gap-4
`;

export const InputFormControl = tw.div`
    form-control 
    w-full
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
    bg-inherit 
    text-white 
    border-solid 
    border-white
`;

export const InputContent = tw.textarea`
    textarea 
    textarea-bordered 
    w-full 
    outline-0 
    h-40 
    resize-none 
    p-3 
    text-base 
    bg-inherit 
    text-white 
    border-solid 
    border-white
`;
