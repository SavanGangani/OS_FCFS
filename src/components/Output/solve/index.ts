import { fcfs } from './fcfs';

export type ganttChartInfoType = {
  job: string;
  start: number;
  stop: number;
  startDate?: Date,
  endDate?: Date
}[];

export type solvedProcessesInfoType = {
  job: string;
  at: number;
  bt: number;
  ft: number;
  tat: number;
  wat: number;
}[];

export const solve = (
  arrivalTime: number[],
  burstTime: number[],
) => {
      return fcfs(arrivalTime, burstTime);
};