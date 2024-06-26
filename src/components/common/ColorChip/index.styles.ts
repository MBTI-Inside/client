import tw from 'tailwind-styled-components';

interface ChipProps {
  bg: string;
}

interface IsSelectedColorProps {
  isSelectedColor: boolean;
}

export const Chip = tw.span<ChipProps>`
    w-12 
    h-12 
    rounded-full 
    border-black 
    border-4 
    inline-block
   ${(p) => (p.bg ? p.bg : p.bg)}
`;

export const ColorChipContainer = tw.div`
  flex
  flex-col
  justify-between
  h-full
  bg-white
  p-4
  rounded-xl
`;

export const ChipSetGroup = tw.section`
flex
flex-col
gap-4
`;

export const ChipSet = tw.div`
  flex 
  items-center 
`;

export const ChipLabel = tw.label`
  flex 
  flex-1
  items-center 
  cursor-pointer 
  gap-4
`;

export const ChipName = tw.span<IsSelectedColorProps>`
  flex-1
  ${(p) => (p.isSelectedColor ? 'font-black opacity-100' : 'opacity-30')}
`;
