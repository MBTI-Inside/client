import tw from 'tailwind-styled-components';

export const MbtiTitleContainer = tw.div`
  flex 
  flex-col 
  items-center 
  p-3
  justify-between
  gap-2
`;

export const MbtiTitle = tw.div`
  flex 
  w-full 
  justify-between
`;

export const Title = tw.div`
  text-4xl
  font-bold
  text-white
`;

export const Badge = tw.div`
  badge 
  badge-accent 
  m-1
`;
