import tw from 'tailwind-styled-components';

export const MbtiList = tw.div`
  relative
  bg-white 
  w-full
  flex 
  items-center 
  p-4
  rounded-full 
  text-5xl 
  font-black 
`;

export const MbtiLabel = tw.label`
  block 
  p-2
`;

export const Toggle = tw.div`
  absolute
  w-2/5
  h-20
  bg-[#b2acf9]
  rounded-full
  transform 
  transition-transform
  duration-300
  ml-1/4 
  mr-1/4
`;
