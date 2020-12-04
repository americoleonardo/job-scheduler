import { IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateJobsDTO {
    @ApiProperty({
      description: 'Description of jobs',
      minimum: 1,
      default: 'Scheduler example'
    })
    @IsNotEmpty()
    public description: string;

    @ApiProperty({
      description: 'Timestamp of jobs',
      default: '2020-11-11 08:00:00'
    })
    @IsNotEmpty()
    public finishDate: any;

    @ApiProperty({
      description: 'Time estimated to finish schedule job',
      minimum: 1,
      default: 1
    })
    @IsNotEmpty()
    public timeEstimated: number;
}