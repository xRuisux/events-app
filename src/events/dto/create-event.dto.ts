import { IsDateString, IsEnum, IsString,  } from "class-validator";
import { eventStatus } from "./../entities/event.entity";

export class CreateEventDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(eventStatus)
  status;

  @IsDateString()
  date: Date;
}
