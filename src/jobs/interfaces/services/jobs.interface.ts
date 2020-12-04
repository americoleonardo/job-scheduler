import { Jobs } from "../../models/jobs.model";
import { CreateJobsDTO } from "../../dto/CreateJobsDTO";

export interface IJobs {
    schedule(scheduler: CreateJobsDTO): Jobs;
}