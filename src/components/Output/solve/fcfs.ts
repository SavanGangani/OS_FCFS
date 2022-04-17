import { ganttChartInfoType } from './';

export const fcfs = (arrivalTime: number[], burstTime: number[]) => {
  const processesInfo = arrivalTime
    .map((item, index) => {
      return {
        job: (index + 10).toString(36).toUpperCase(),
        at: item,
        bt: burstTime[index],
      };
    })
    .sort((obj1, obj2) => {
      if (obj1.at > obj2.at) {
        return 1;
      }
      if (obj1.at < obj2.at) {
        return -1;
      }
      return 0;
    });

  let finishTime: number[] = [];
  let ganttChartInfo: ganttChartInfoType = [];
  let googleGanttChartInput = [];

  const solvedProcessesInfo = processesInfo.map((process, index) => {
    let  mainDate = Date.now();
    mainDate = new Date(mainDate).setHours(0, 0, 0, 0);
    
    if (index === 0 || process.at > finishTime[index - 1]) {
      finishTime[index] = process.at + process.bt;
      const { job, at } = process; 
      const ft = finishTime[index];
      googleGanttChartInput.push([
        job, job, null, new Date(mainDate + at * (1000)), new Date(mainDate + ft * (1000)), null, 100, null  
      ]);
      ganttChartInfo.push({
        job: job,
        start: at,
        stop: ft
      });
    } else {
      finishTime[index] = finishTime[index - 1] + process.bt;
      const at =  finishTime[index - 1];
      const ft = finishTime[index];
      const job = process.job;
      googleGanttChartInput.push([
        job, job, null, new Date(mainDate + at * (1000)), new Date(mainDate + ft * (1000)), null, 100, null  
      ]);
      ganttChartInfo.push({
        job: job,
        start: at,
        stop: ft
      });
    }

    return {
      ...process,
      ft: finishTime[index],
      tat: finishTime[index] - process.at,
      wat: finishTime[index] - process.at - process.bt,
    };
  });

  return { solvedProcessesInfo, ganttChartInfo, googleGanttChartInput };
};
