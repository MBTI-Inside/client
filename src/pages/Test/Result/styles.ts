import tw from 'tailwind-styled-components';

interface TestResultBackgroundColorProps {
  color: string;
}

export const TestResultContainer = tw.section<TestResultBackgroundColorProps>`
flex
flex-col
w-full
flex-1
justify-center
items-center
gap-12
${(bg) => (bg.color ? bg.color : bg.color)}
`;

export const Buttons = tw.div`
flex
flex-col
w-5/6
gap-4
mb-6
`;
