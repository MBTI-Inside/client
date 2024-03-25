import * as S from '@/components/pages/MyPage/MyLogo/styles';

const MyLogo = () => {
  return (
    <S.ResponsiveLogo
      viewBox="0 0 430 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="black" />
      <path
        d="M116.574 22.6267C62.9066 42.8828 38.5689 60.8934 -1 97.4623L-0.44801 355H429V97.4623C394.854 64.2682 368.727 47.3971 311.426 22.6266C236.158 1.28786 195.555 -2.94389 116.574 22.6267Z"
        fill="#0272F1"
      />
      <ellipse cx="214" cy="241" rx="40" ry="20" fill="white" />
      <ellipse cx="127.5" cy="127.5" rx="46.5" ry="44.5" fill="white" />
      <ellipse cx="128" cy="127" rx="18" ry="19" fill="black" />
      <ellipse cx="275.5" cy="127.5" rx="46.5" ry="44.5" fill="white" />
      <ellipse cx="276" cy="128" rx="18" ry="19" fill="black" />
    </S.ResponsiveLogo>
  );
};

export default MyLogo;
