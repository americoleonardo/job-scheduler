import {Controller, Get, Post, Body, Logger} from '@nestjs/common';
import { SchedulerService } from "../services/scheduler.service";
import { Scheduler } from "../models/scheduler.model";

@Controller('scheduler')
export class SchedulerController {
    constructor(private schedulerService: SchedulerService) {}
    private readonly logger = new Logger(SchedulerController.name);

    @Get()
    getAll(): Array<object> {
        return this.schedulerService.getAll();
    }

    @Post()
    schedule(
      @Body('description') description: string,
      @Body('finishDate') finishDate: any,
      @Body('timeEstimated') timeEstimated: number
    ): Scheduler {
      this.logger.log("> Schedule job has been called");
      return this.schedulerService.schedule(description, finishDate, timeEstimated);
    }
}
