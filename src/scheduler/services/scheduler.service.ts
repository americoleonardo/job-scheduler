import { Injectable } from '@nestjs/common';
import { IScheduler } from "../interfaces/services/scheduler.interface";
import { Scheduler } from '../models/scheduler.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SchedulerService implements IScheduler {
    private readonly MAX_INTERVAL: number = 8;

    private queueScheduler: Array<object> = [];

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
        let amountTime: number = 0;

        for (let i in jobs) {
          amountTime = amountTime + Number(jobs[i].timeEstimated);
        }

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
