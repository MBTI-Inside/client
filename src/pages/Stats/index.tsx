import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';

import { useModalContext } from '@/hooks/useModal';

import Button from '@/components/common/Button';
import MBTITypes from '@/components/common/MBTITypes';

const Stats = () => {
  const { openModal } = useModalContext();
  const navigate = useNavigate();

  const series = [
    {
      data: [
        { x: 'ESTJ', y: 218 },
        { x: 'ISFJ', y: 149 },
        { x: 'INTP', y: 184 },
        { x: 'ESFJ', y: 55 },
        { x: 'ENTP', y: 84 },
        { x: 'ESFP', y: 31 },
        { x: 'ISFP', y: 70 },
        { x: 'ESTP', y: 30 },
        { x: 'ISTJ', y: 44 },
        { x: 'INFP', y: 68 },
        { x: 'INFJ', y: 28 },
        { x: 'ENTJ', y: 19 },
        { x: 'ISTP', y: 29 },
        { x: 'INTJ', y: 13 },
        { x: 'ENTP', y: 58 },
        { x: 'ENFP', y: 3 }
      ]
    }
  ];

  const treemapOptions: ApexOptions = {
    legend: {
      show: false
    },
    chart: {
      type: 'treemap',
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['#000']
    },
    colors: [
      '#4A235A', // 진한 보라색
      '#5B2C6F', // 보라색
      '#922B21', // 진한 적색
      '#76448A', // 어두운 보라색
      '#1F618D', // 진한 파란색
      '#AF7AC5', // 연보라색
      '#1ABC9C', // 진한 민트색
      '#F5B041', // 금색
      '#839192', // 회색
      '#A9CCE3', // 하늘색
      '#E6B0AA', // 연분홍색
      '#A3E4D7', // 연민트색
      '#3498DB', // 밝은 파란색
      '#F7DC6F', // 밝은 노란색
      '#AED6F1', // 페이스트 블루
      '#F1948A' // 연한 코랄
    ],
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false
      }
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <ReactApexChart
        className="w-11/12"
        options={treemapOptions}
        series={series}
        type="treemap"
        height={400}
      />
      {/* TODO: 모달 닫을 때 콜백함수 추가 필요 */}
      <Button
        classProp="w-80 h-14 text-lg bg-blue-500 hover:bg-blue-600 text-white"
        onClick={() => openModal(<MBTITypes />, null, 'MBTI 선택')}
      >
        MBTI별 통계
      </Button>
      <Button
        classProp="w-80 h-14 text-lg bg-fuchsia-400 hover:bg-fuchsia-500 text-white"
        onClick={() => navigate('/memo')}
      >
        메모장 보러가기
      </Button>
    </div>
  );
};

export default Stats;
// 전체 통계를 보여줌
