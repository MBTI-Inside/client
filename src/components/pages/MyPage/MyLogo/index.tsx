const MyLogo = () => {
  // TODO: Responsive하게 svg 재구성 360 ~ 430
  // 색상도 여러 개를 넣으면 더 다채롭지 않을까?
  return (
    <svg
      width="389"
      height="344"
      viewBox="0 0 389 344"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_152_447)">
        <rect width="389" height="344" fill="white" />
        <path
          d="M105.5 22.0765C56.8875 41.7004 34.8421 59.149 -1 94.5765L-0.5 344.077H388.5V94.5765C357.57 62.4185 333.904 46.0739 282 22.0764C213.821 1.40372 177.042 -2.69596 105.5 22.0765Z"
          fill="#0272F1"
        />
        <ellipse cx="194" cy="225" rx="40" ry="20" fill="white" />
        <ellipse cx="129.5" cy="127.5" rx="46.5" ry="44.5" fill="white" />
        <ellipse cx="130" cy="127" rx="18" ry="19" fill="black" />
        <ellipse cx="264.5" cy="127.5" rx="46.5" ry="44.5" fill="white" />
        <ellipse cx="265" cy="128" rx="18" ry="19" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_152_447">
          <rect width="389" height="344" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MyLogo;
