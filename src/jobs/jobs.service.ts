import { Injectable, Logger } from '@nestjs/common';
import { IJobs } from "./interfaces/services/jobs.interface";
import { Jobs } from './models/jobs.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateJobsDTO } from "./dto/CreateJobsDTO";

@Injectable()
export class JobsService implements IJobs {
    private readonly logger = new Logger(JobsService.name);

    private readonly MAX_INTERVAL: number = 8;

    private queueJobs: Array<object> = [];

    getAll(): Array<object> {
      this.logger.log(">> Get jobs queue has been called.");
      return this.queueJobs;
    }

    schedule(jobsDTO: CreateJobsDTO): Jobs {
      const { description, finishDate, timeEstimated } = jobsDTO;

      const jobs: Jobs = {
        id: uuidv4(),
        description,
        finishDate,
        timeEstimated
      };

      this.addNode(jobs);

      return jobs;
    }

    private addNode(item: Jobs): boolean {
      this.logger.log(">> Trying to add job");
      if (!this.queueJobs.length) {
        this.queueJobs.push(new Array(item));

        this.logger.log(">> Queue without jobs. Added succesfully.");
        return true;
      }

      let hasInserted: boolean;
      this.queueJobs.map((jobs, idx) => {
        let amountTime: number = Object(jobs).reduce((total, job) => {
          return total + Number(job.timeEstimated)
        }, 0);

        amountTime = amountTime + Number(item.timeEstimated);

        if (amountTime <= this.MAX_INTERVAL && !hasInserted) {
          Object(jobs).push(item);

          this.queueJobs[idx] = jobs;
          hasInserted = true;
        } else {
            if (!hasInserted) {
              this.queueJobs.push(new Array(item));
              hasInserted = true;
            }
        }
      }, item);

      this.logger.log(">> Job added succesfully.");
      return true;
    }
}
