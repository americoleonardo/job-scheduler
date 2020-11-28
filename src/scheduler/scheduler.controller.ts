import { Controller, Get, Post, Put, Body } from '@nestjs/common';
import { SchedulerService } from "./scheduler.service";
import { Scheduler } from "./scheduler.model";

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
