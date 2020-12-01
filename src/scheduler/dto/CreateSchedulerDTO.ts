import { IsNotEmpty } from "class-validator";

export class CreateSchedulerDTO {
    @IsNotEmpty()
    public description: string;

    @IsNotEmpty()
    public finishDate: any;

    @IsNotEmpty()
    public timeEstimated: number;
}