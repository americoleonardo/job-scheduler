import { Jobs } from "./jobs.model";

describe('JobsModel', () => {
  it('verify if model has necessary attributes', () => {
    const jobs: Jobs = {
      id: 1234,
      description: 'description',
      finishDate: "2020-01-01 00:00:00",
      timeEstimated: 3
    }

    expect(jobs.id).toBe(1234);
    expect(jobs.description).toBe('description');
    expect(jobs.finishDate).toBe("2020-01-01 00:00:00");
    expect(jobs.timeEstimated).toBe(3);

    expect(new Jobs()).toBeInstanceOf(Jobs);
  });
});

