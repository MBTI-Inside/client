type MBTIElementOption = 'E' | 'I' | 'N' | 'S' | 'T' | 'F' | 'J' | 'P';
type MBTITypesOption = 'energy' | 'awareness' | 'judgement' | 'life';
export type MBTIDatasOption = {
  energy: string[];
  awareness: string[];
  judgement: string[];
  life: string[];
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
  'energy',
  'awareness',
  'judgement',
  'life'
];

export const MBTI_OPTIONS_DATA: MBTIDatasOption = {
  energy: ['E', 'I'],
  awareness: ['N', 'S'],
  judgement: ['T', 'F'],
  life: ['P', 'J']
};
