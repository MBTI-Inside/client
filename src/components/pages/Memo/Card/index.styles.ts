import tw from 'tailwind-styled-components';

// TODO: 색상 props로 전달받아야 함.
export const CardContainer = tw.section`
    card
    w-11/12
    h-40 
    bg-green-300
    shadow-xl
`;

export const CardBody = tw.section`
    card-body 
    p-4
    justify-between
`;

export const CardContent = tw.article`
`;

export const Title = tw.h3`
    card-title 
    line-clamp-1
`;

export const Content = tw.div`
    line-clamp-2
`;

export const CardInfoContainer = tw.section`
    flex 
    flex-col 
    justify-between
`;

export const MemoDate = tw.div`
    ml-auto
`;

export const CardInfo = tw.div`
    flex 
    flex-row 
    justify-between
`;

export const MBTI = tw.div`
    font-bold
`;

export const HistoryContainer = tw.div`
    flex 
    justify-between 
    w-20
`;

export const History = tw.div`
    flex 
    flex-row 
    items-center
`;
