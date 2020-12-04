import { SchedulerController } from './scheduler.controller';
import { SchedulerService } from './scheduler.service';
import { Scheduler } from "./models/scheduler.model";
import { CreateSchedulerDTO } from "./dto/CreateSchedulerDTO";

describe('SchedulerController', () => {
  let schedulerController: SchedulerController;
  let schedulerService: SchedulerService;

  beforeEach(() => {
      schedulerService = new SchedulerService();
      schedulerController = new SchedulerController(schedulerService);
  });

  describe('schedule', () => {
    it('should schedule a new item', async () => {
      const result: Scheduler = {
        id: 1234,
        description: "My description",
        finishDate: "2020-01-01 00:00:00",
        timeEstimated: 4
      };

      jest.spyOn(schedulerService, 'schedule').mockImplementation(() => result);

      const mockDto: CreateSchedulerDTO = {
        description: "My description",
        finishDate: "2020-01-01 00:00:00",
        timeEstimated: 4
      };

      expect(await schedulerController.schedule(mockDto)).toBe(result);
    });

    it('getAll', async () => {
      const result: any = {
        id: 1234,
        description: "My description",
        finishDate: "2020-01-01 00:00:00",
        timeEstimated: 4
      };

      jest.spyOn(schedulerService, 'getAll').mockImplementation(() => [result]);

      expect(await schedulerController.getAll()).toEqual([result]);
    });
  });
});