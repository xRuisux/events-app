import { IsDateString, IsEnum, IsNumber, IsString,  } from "class-validator";
import { eventStatus } from "./../entities/event.entity";
import { Type } from "class-transformer";

export class CreateEventDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(eventStatus)
  status;

  @IsNumber()
  @Type(() => Number)
  price: number;

  @IsDateString()
  date: Date;
}
