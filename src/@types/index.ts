import { Fit, MBTI } from '@/@types/MBTI';
import {
  MBTIProportion,
  MBTIProportions,
  MBTIType,
  Question
} from '@/@types/Question';

export interface CommonResponse {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export type { Question, MBTIProportions, MBTIProportion, MBTI, MBTIType, Fit };
