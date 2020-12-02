import { Injectable, Logger } from '@nestjs/common';
import { IScheduler } from "../interfaces/services/scheduler.interface";
import { Scheduler } from '../models/scheduler.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateSchedulerDTO } from "../dto/CreateSchedulerDTO";

@Injectable()
export class SchedulerService implements IScheduler {
    private readonly logger = new Logger(SchedulerService.name);

    private readonly MAX_INTERVAL: number = 8;

    private queueScheduler: Array<object> = [];

    getAll(): Array<object> {
      return this.queueScheduler;
    }

    schedule(schedulerDTO: CreateSchedulerDTO): Scheduler {
      const { description, finishDate, timeEstimated } = schedulerDTO;

      const scheduler: Scheduler = {
        id: uuidv4(),
        description,
        finishDate,
        timeEstimated
      };

      this.addNode(scheduler);

      return scheduler;
    }

    private addNode(item: Scheduler): boolean {
      this.logger.log(">> Trying to add job");
      if (!this.queueScheduler.length) {
        this.queueScheduler.push(new Array(item));

        this.logger.log(">> Queue without jobs. Added succesfully.");
        return true;
      }

      let hasInserted: boolean;
      this.queueScheduler.map((jobs, idx) => {
        let amountTime: number = Object(jobs).reduce((total, job) => {
          return total + Number(job.timeEstimated)
        }, 0);

        amountTime = amountTime + Number(item.timeEstimated);

        if (amountTime <= this.MAX_INTERVAL && !hasInserted) {
          Object(jobs).push(item);

          this.queueScheduler[idx] = jobs;
          hasInserted = true;
        } else {
            if (!hasInserted) {
              this.queueScheduler.push(new Array(item));
              hasInserted = true;
            }
        }
      }, item);

      this.logger.log(">> Job added succesfully.");
      return true;
    }
}
