import { Scheduler } from "../../models/scheduler.model";

export interface IScheduler {
    getAll(): Scheduler[];

    schedule(description: string, finishDate: any, timeEstimated: number): Scheduler;

    addToQueue(scheduler: Scheduler): boolean;
}