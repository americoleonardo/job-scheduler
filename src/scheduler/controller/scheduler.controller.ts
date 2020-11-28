import { Controller, Get, Post, Body } from '@nestjs/common';
import { SchedulerService } from "../services/scheduler.service";
import { Scheduler } from "../models/scheduler.model";

@Controller('scheduler')
export class SchedulerController {
    constructor(private schedulerService: SchedulerService) {}

    @Get()
    getAll(): Scheduler[] {
        return this.schedulerService.getAll();
    }

    @Post()
    schedule(
      @Body('description') description: string,
      @Body('finishDate') finishDate: any,
      @Body('timeEstimated') timeEstimated: number
    ): Scheduler {
      return this.schedulerService.schedule(description, finishDate, timeEstimated);
    }
}
