import { CommonResponse } from '.';

type MBTIType = 'energy' | 'awareness' | 'judgement' | 'life';

export interface Question extends CommonResponse {
  subject: string;
  answer: Answer[];
  mbtiType: MBTIType;
}

export interface Answer {
  type: string;
  content: string;
  proportion: number;
}
