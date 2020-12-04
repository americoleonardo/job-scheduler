import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { Jobs } from "./models/jobs.model";
import { CreateJobsDTO } from "./dto/CreateJobsDTO";

describe('JobsController', () => {
  let jobsController: JobsController;
  let jobsService: JobsService;

  beforeEach(() => {
      jobsService = new JobsService();
      jobsController = new JobsController(jobsService);
  });

  describe('schedule', () => {
    it('should schedule a new job', async () => {
      const result: Jobs = {
        id: 1234,
        description: "My description",
        finishDate: "2020-01-01 00:00:00",
        timeEstimated: 4
      };

      jest.spyOn(jobsService, 'schedule').mockImplementation(() => result);

      const mockDto: CreateJobsDTO = {
        description: "My description",
        finishDate: "2020-01-01 00:00:00",
        timeEstimated: 4
      };

      expect(await jobsController.schedule(mockDto)).toBe(result);
    });

    it('getAll', async () => {
      const result: any = {
        id: 1234,
        description: "My description",
        finishDate: "2020-01-01 00:00:00",
        timeEstimated: 4
      };

      jest.spyOn(jobsService, 'getAll').mockImplementation(() => [result]);

      expect(await jobsController.getAll()).toEqual([result]);
    });
  });
});