import { CreateJobsDTO } from "./CreateJobsDTO";

describe('CreateJobsDTO case', () => {
  it('verify if model has necessary attributes', () => {
    const job: CreateJobsDTO = {
      description: 'description',
      finishDate: "2020-01-01 00:00:00",
      timeEstimated: 3
    }

    expect(job.description).toBe('description');
    expect(job.finishDate).toBe("2020-01-01 00:00:00");
    expect(job.timeEstimated).toBe(3);

    expect(new CreateJobsDTO()).toBeInstanceOf(CreateJobsDTO);
  });
});
