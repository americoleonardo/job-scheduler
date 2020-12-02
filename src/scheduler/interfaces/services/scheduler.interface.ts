import { Scheduler } from "../../models/scheduler.model";
import { CreateSchedulerDTO } from "../../dto/CreateSchedulerDTO";

export interface IScheduler {
    schedule(scheduler: CreateSchedulerDTO): Scheduler;
}