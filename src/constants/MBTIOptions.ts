type MBTIElementOption = 'E' | 'I' | 'N' | 'S' | 'T' | 'F' | 'J' | 'P';
type MBTITypesOption = 'Energy' | 'Awareness' | 'Judgement' | 'Life';
type MBTIDatasOption = {
  Energy: string[];
  Awareness: string[];
  Judgement: string[];
  Life: string[];
};

export const MBTI_ELEMENT_OPTIONS: MBTIElementOption[] = [
  'E',
  'I',
  'N',
  'S',
  'T',
  'F',
  'J',
  'P'
];

export const MBTI_TYPES_OPTIONS: MBTITypesOption[] = [
  'Energy',
  'Awareness',
  'Judgement',
  'Life'
];

export const MBTI_OPTIONS_DATA: MBTIDatasOption = {
  Energy: ['E', 'I'],
  Awareness: ['N', 'S'],
  Judgement: ['T', 'F'],
  Life: ['P', 'J']
};
