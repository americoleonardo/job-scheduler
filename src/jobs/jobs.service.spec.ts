import { Test } from '@nestjs/testing';
import { JobsService } from "./jobs.service";
import { CreateJobsDTO } from "./dto/CreateJobsDTO";

describe('JobsService', () => {
  let jobsService;

  beforeEach(async() => {
    const module = await Test.createTestingModule({
      providers: [
        JobsService
      ]
    }).compile();

    jobsService = await module.get<JobsService>(JobsService);
  });

  it('Const MAX_INTERVAL must be scheduled to each 8 hours', () => {
      expect(jobsService.MAX_INTERVAL).toEqual(8);
  });

  describe ('getAll', () => {
    it('List empty jobs queue when application start.', () => {
      expect(jobsService.getAll()).toHaveLength(0);
    });
  });

  describe ('schedule', () => {
    it('Add items and validate if they was scheduled correctly.', () => {
      let queueJobs: Array<object> = [];

      let jobsDTO: CreateJobsDTO = {
        description: "Importação de dados de integração",
        finishDate: "2019-11-11 08:00:00",
        timeEstimated: 6
      };
      let result = jobsService.schedule(jobsDTO);
      queueJobs.push([result]);

      let jobsDTO2: CreateJobsDTO = {
        description: "Importação de dados da Base Legada",
        finishDate: "2020-11-11 12:00:00",
        timeEstimated: 4
      };
      result = jobsService.schedule(jobsDTO2);
      queueJobs.push([result]);

      let jobsDTO3: CreateJobsDTO = {
        description: "Importação de arquivos de fundos",
        finishDate: "2020-11-10 12:00:00",
        timeEstimated: 2
      };
      result = jobsService.schedule(jobsDTO3);
      Object(queueJobs[0]).push(result);

      let obj: any = jobsService.getAll();

      expect(queueJobs).toEqual(obj);
    });
  });
});
