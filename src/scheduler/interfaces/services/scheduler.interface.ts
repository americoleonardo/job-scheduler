import { Scheduler } from "../../models/scheduler.model";

export interface IScheduler {
    schedule(description: string, finishDate: any, timeEstimated: number): Scheduler;

    addNode(scheduler: Scheduler): boolean;
}