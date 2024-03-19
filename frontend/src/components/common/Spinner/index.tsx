import { useEffect, useState } from 'react';

const Spinner = () => {
  // SVG의 색상을 상태로 관리합니다.
  const [color, setColor] = useState('#000000'); // 초기 색상은 검정색

  // 0.5초마다 색상을 변경하기 위한 함수
  useEffect(() => {
    const interval = setInterval(() => {
      // 랜덤한 HEX 색상 생성
      const randomColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16);
      setColor(randomColor);
    }, 500); // 0.5초마다 색상 변경

    // 컴포넌트가 언마운트될 때 interval을 정리합니다.
    return () => clearInterval(interval);
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행되도록 합니다.

  return (
    <svg
      width="182"
      height="211"
      viewBox="0 0 182 211"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.207031 172.801C3.37911 129.47 42.6285 95.2256 90.5808 95.2256C138.826 95.2256 178.262 129.89 181.009 173.596C158.01 196.7 126.175 211 91.0001 211C55.4234 211 23.2634 196.371 0.207031 172.801Z"
        fill={color}
      />
      <rect
        x="108.191"
        y="194.185"
        width="60.2646"
        height="22"
        rx="11"
        transform="rotate(-150 108.191 194.185)"
        fill="#0272F1"
      />
      <circle cx="71" cy="158" r="27" fill="#0272F1" />
      <circle cx="70.5" cy="157.5" r="17.5" fill="white" />
      <path
        d="M59.9296 153.858C58.864 153.47 58.3017 152.282 58.8411 151.284C59.5035 150.06 60.3467 148.937 61.3455 147.956C62.8342 146.494 64.6309 145.383 66.6042 144.704C68.5775 144.026 70.6776 143.797 72.7507 144.035C74.1416 144.194 75.4968 144.561 76.7723 145.12C77.811 145.575 78.0982 146.857 77.4963 147.819V147.819C76.8945 148.78 75.6306 149.048 74.5661 148.657C73.8315 148.387 73.0652 148.205 72.2829 148.115C70.8179 147.947 69.3338 148.108 67.9393 148.588C66.5448 149.067 65.2752 149.852 64.2231 150.886C63.6614 151.437 63.1693 152.053 62.7558 152.717C62.1567 153.68 60.9952 154.246 59.9296 153.858V153.858Z"
        fill="#0272F1"
      />
      <ellipse
        cx="90.3915"
        cy="59.3785"
        rx="64.6734"
        ry="59.3785"
        fill={color}
      />
      <ellipse
        cx="108.356"
        cy="41.7921"
        rx="17.5866"
        ry="16.8302"
        fill="white"
      />
      <ellipse
        cx="108.545"
        cy="41.9809"
        rx="6.80773"
        ry="7.18594"
        fill="black"
      />
      <ellipse
        cx="68.6447"
        cy="42.1701"
        rx="17.5866"
        ry="16.8302"
        fill="white"
      />
      <ellipse
        cx="68.8336"
        cy="42.3593"
        rx="6.80773"
        ry="7.18594"
        fill="black"
      />
      <ellipse
        cx="90.0133"
        cy="76.9651"
        rx="15.1283"
        ry="6.99683"
        fill="white"
      />
    </svg>
  );
};

export default Spinner;
