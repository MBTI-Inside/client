type MBTIType = 'Energy' | 'Awareness' | 'Judgement' | 'Life';

export interface Question {
  subject: string;
  answer: {
    type: string;
    content: string;
    proportion: number;
  }[];
  mbtiType: MBTIType;
}
