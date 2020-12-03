import { CreateSchedulerDTO } from "./CreateSchedulerDTO";

describe('CreateSchedulerDTO case', () => {
  it('verify if model has necessary attributes', () => {
    const scheduler: CreateSchedulerDTO = {
      description: 'description',
      finishDate: "2020-01-01 00:00:00",
      timeEstimated: 3
    }

    expect(scheduler.description).toBe('description');
    expect(scheduler.finishDate).toBe("2020-01-01 00:00:00");
    expect(scheduler.timeEstimated).toBe(3);

    expect(new CreateSchedulerDTO()).toBeInstanceOf(CreateSchedulerDTO);
  });
});
