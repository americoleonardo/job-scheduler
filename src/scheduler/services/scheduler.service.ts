import { Injectable } from '@nestjs/common';
import { IScheduler } from "../interfaces/services/scheduler.interface";
import { Scheduler } from '../models/scheduler.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SchedulerService implements IScheduler {
    private queueScheduler: Scheduler[] = [];

    getAll(): Scheduler[] {
      return this.queueScheduler;
    }

    schedule(description: string, finishDate: any, timeEstimated: number): Scheduler {
      const scheduler: Scheduler = {
        id: uuidv4(),
        description,
        finishDate,
        timeEstimated
      };

      this.addToQueue(scheduler);

      return scheduler;
    }

    addToQueue(item: Scheduler): boolean {
      console.log("add to queue method");
      console.log(item);

      return true;
    }
}
