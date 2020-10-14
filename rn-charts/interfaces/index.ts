import { Days } from '../constants/Days';

export interface IStudent {
  name: string;
  phone: string;
  id: string;
}

export interface ILesson {
  time: string;
  students: IStudent[];
}

export interface IDay {
  id: Days;
  name: string;
  lessons: Record<string, ILesson>;
}
