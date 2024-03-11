import { BsExclamationCircleFill } from 'react-icons/bs';
import tw from 'tailwind-styled-components';

export const AlertContainer = tw.div`
    flex 
    flex-col 
    gap-2 
    items-center
`;
export const AlertIcon = tw(BsExclamationCircleFill)`
    text-4xl 
    text-yellow-400
`;

export const AlertContent = tw.div`
    flex 
    h-10 
    items-center 
    text-lg
`;
