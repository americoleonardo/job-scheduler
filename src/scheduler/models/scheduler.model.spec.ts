import { Scheduler } from "./scheduler.model";

describe('SchedulerModel', () => {
  it('verify if model has necessary attributes', () => {
    const scheduler: Scheduler = {
      id: 1234,
      description: 'description',
      finishDate: "2020-01-01 00:00:00",
      timeEstimated: 3
    }

    expect(scheduler.id).toBe(1234);
    expect(scheduler.description).toBe('description');
    expect(scheduler.finishDate).toBe("2020-01-01 00:00:00");
    expect(scheduler.timeEstimated).toBe(3);
  });
});

