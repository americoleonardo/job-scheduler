import { Test } from '@nestjs/testing';
import { SchedulerService } from "./scheduler.service";
import { CreateSchedulerDTO } from "./dto/CreateSchedulerDTO";

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
    it('Add items and validate if they was scheduled correctly.', () => {
      let queueScheduler: Array<object> = [];

      let schedulerDTO: CreateSchedulerDTO = {
        description: "Importação de dados de integração",
        finishDate: "2019-11-11 08:00:00",
        timeEstimated: 6
      };
      let result = schedulerService.schedule(schedulerDTO);
      queueScheduler.push([result]);

      let schedulerDTO2: CreateSchedulerDTO = {
        description: "Importação de dados da Base Legada",
        finishDate: "2020-11-11 12:00:00",
        timeEstimated: 4
      };
      result = schedulerService.schedule(schedulerDTO2);
      queueScheduler.push([result]);

      let schedulerDTO3: CreateSchedulerDTO = {
        description: "Importação de arquivos de fundos",
        finishDate: "2020-11-10 12:00:00",
        timeEstimated: 2
      };
      result = schedulerService.schedule(schedulerDTO3);
      Object(queueScheduler[0]).push(result);

      let obj: any = schedulerService.getAll();

      expect(queueScheduler).toEqual(obj);
    });
  });
});
