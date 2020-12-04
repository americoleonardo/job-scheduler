import { Controller, Get, Post, Body, Logger, UsePipes, ValidationPipe } from '@nestjs/common';
import { SchedulerService } from "./scheduler.service";
import { Scheduler } from "./models/scheduler.model";
import { CreateSchedulerDTO } from "./dto/CreateSchedulerDTO";

@Controller('scheduler')
export class SchedulerController {
    constructor(private schedulerService: SchedulerService) {}
    private readonly logger = new Logger(SchedulerController.name);

    @Get()
    getAll(): Array<object> {
        return this.schedulerService.getAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    public schedule(
      @Body() schedulerDTO: CreateSchedulerDTO
    ): Scheduler {
      this.logger.log("> Schedule job has been called");

      return this.schedulerService.schedule(schedulerDTO);
    }
}
