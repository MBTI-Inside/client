import { CommonResponse } from '.';

type MBTIType = 'energy' | 'awareness' | 'judgement' | 'life';

export interface Question extends CommonResponse {
  subject: string;
  answer: {
    type: string;
    content: string;
    proportion: number;
  }[];
  mbtiType: MBTIType;
}
