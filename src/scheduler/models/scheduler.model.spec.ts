import { Test } from '@nestjs/testing';
import { SchedulerService } from "./scheduler.service";
import {CreateSchedulerDTO} from "../dto/CreateSchedulerDTO";
import {Scheduler} from "../models/scheduler.model";

describe('SchedulerService', () => {
  let schedulerService;

  beforeEach(async() => {
    const module = await Test.createTestingModule({
      providers: [
        SchedulerService
      ]
    }).compile();

    schedulerService = await module.get<SchedulerService>(SchedulerService);
  });

  it('Const MAX_INTERVAL must be scheduled to each 8 hours', () => {
      expect(schedulerService.MAX_INTERVAL).toEqual(8);
  });

  describe ('getAll', () => {
    it('List empty scheduler queue when application start.', () => {
      expect(schedulerService.getAll()).toHaveLength(0);
    });
  });

  describe ('schedule', () => {
    it('Add item to queue and verify if was inserted.', () => {
      const schedulerDTO: CreateSchedulerDTO = {
        description: "description",
        finishDate: "2020-01-01 00:00:00",
        timeEstimated: 3
      };

      let result = schedulerService.schedule(schedulerDTO)
      let obj: any = schedulerService.getAll();

      expect(Object(obj[0][0])).toEqual(result);
    });
  });
});
