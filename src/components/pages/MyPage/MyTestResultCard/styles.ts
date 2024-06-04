import tw from 'tailwind-styled-components';

export const MyTestResultCardContainer = tw.section`
    flex 
    flex-col 
    items-center 
    justify-between 
    bg-[#BF1132] 
    shadow-xl 
    p-4
    w-full
`;

export const MyTestStatisticContainer = tw.section`
flex flex-col p-4 items-center gap-2 bg-white rounded-xl
`;

export const MyTestStatisticInfo = tw.div`
flex flex-row gap-3 w-full justify-around
`;

export const MyTestRadialProgress = tw.div`
flex flex-col items-center gap-1
`;

export const MyTestResultInfo = tw.section`
p-2 w-full flex flex-col items-center gap-2
`;
