import { Controller, Get, Post, Body, Logger, UsePipes, ValidationPipe } from '@nestjs/common';
import { JobsService } from "./jobs.service";
import { Jobs } from "./models/jobs.model";
import { CreateJobsDTO } from "./dto/CreateJobsDTO";

@Controller('jobs')
export class JobsController {
    constructor(private jobsService: JobsService) {}
    private readonly logger = new Logger(JobsController.name);

    @Get()
    getAll(): Array<object> {
        return this.jobsService.getAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    public schedule(
      @Body() jobsDTO: CreateJobsDTO
    ): Jobs {
      this.logger.log("> Schedule job has been called");

      return this.jobsService.schedule(jobsDTO);
    }
}
