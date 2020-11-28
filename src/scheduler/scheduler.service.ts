import { Injectable } from '@nestjs/common';
import { Scheduler } from './scheduler.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SchedulerService {
    private queueScheduler: Scheduler[] = [];

    getAll(): Scheduler[] {
      return this.queueScheduler;
    }

    schedule(description: string, finishDate: any, timeEstimated: number) {
      const scheduler: Scheduler = {
        id: uuidv4(),
        description,
        finishDate,
        timeEstimated
      };

      console.log(scheduler);

      return scheduler;
    }
}
