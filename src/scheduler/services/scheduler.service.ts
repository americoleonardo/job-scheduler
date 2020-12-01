import { Injectable } from '@nestjs/common';
import { IScheduler } from "../interfaces/services/scheduler.interface";
import { Scheduler } from '../models/scheduler.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SchedulerService implements IScheduler {
    private readonly MAX_INTERVAL: number = 8;

    private queueScheduler: Array<object> = [];

    private executionPeriodStart: any =  new Date("2019-11-10 09:00:00");

    private executionPeriodEnd: any =  new Date("2019-11-11 12:00:00");

    getAll(): Array<object> {
      return new Array<object>();
    }

    schedule(description: string, finishDate: any, timeEstimated: number): Scheduler {
      const scheduler: Scheduler = {
        id: uuidv4(),
        description,
        finishDate,
        timeEstimated
      };

      this.addNode(scheduler);

      return scheduler;
    }

    addNode(item: Scheduler): boolean {
      if (!this.queueScheduler.length) {
        this.queueScheduler.push(new Array(item));

        return true;
      }

      this.queueScheduler.map((jobs, idx) => {
        let amountTime: number = Object(jobs).reduce((total, job) => {
          return total + Number(job.timeEstimated)
        }, 0);

        amountTime = amountTime + Number(item.timeEstimated);

        if (amountTime <= this.MAX_INTERVAL) {
            Object(jobs).push(item);

            this.queueScheduler[idx] = jobs;
        } else {
            this.queueScheduler.push(new Array(item));
        }
      }, item);
      console.log(this.queueScheduler);

      return true;
    }
}
