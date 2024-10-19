import { Fit, MBTI } from '@/@types/MBTI';
import { Question } from '@/@types/Question';

export interface CommonResponse {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export type { Question, MBTI, Fit };
