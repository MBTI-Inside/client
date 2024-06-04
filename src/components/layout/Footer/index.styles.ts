import { BsGithub } from 'react-icons/bs';
import { BsShare } from 'react-icons/bs';
import tw from 'tailwind-styled-components';

export const FooterContainer = tw.footer`
  flex
  bg-regal-purple
  w-full
  items-center 
  justify-between
  p-2.5
  text-neutral-content
`;

export const GitHubIcon = tw(BsGithub)`
  text-4xl
  text-black
`;

export const ShareIcon = tw(BsShare)`
  text-4xl
  text-black
`;

export const FooterTextArea = tw.aside`
  flex
  flex-col
  items-center
`;

export const FooterNav = tw.nav`
  flex
  gap-4
`;

export const Copyright = tw.p`
  text-lg
  text-black
`;
