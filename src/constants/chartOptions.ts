import { ApexOptions } from 'apexcharts';

export const treemapOptions: ApexOptions = {
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
    '#3B93A5',
    '#F7B844',
    '#ADD8C7',
    '#EC3C65',
    '#CDD7B6',
    '#C1F666',
    '#D43F97',
    '#1E5D8C',
    '#421243',
    '#7F94B0',
    '#EF6537',
    '#C0ADDB',
    '#C1AFB5',
    '#AA12BB',
    '#F8BAB5',
    '#119BA3'
  ],
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: false
    }
  }
};
