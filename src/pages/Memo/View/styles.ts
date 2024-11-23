import tw from 'tailwind-styled-components';

interface MemoViewWrapperProps {
  cardColor?: string;
}

export const MemoViewWrapper = tw.section<MemoViewWrapperProps>`
    flex 
    flex-1 
    flex-col 
    gap-4 
    items-center
    ${(bg) => (bg.cardColor ? bg.cardColor : 'inherit')}
`;
