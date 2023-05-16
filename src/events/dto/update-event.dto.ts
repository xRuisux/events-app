import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
import { IsDateString, IsEmail, IsEnum, IsString,  } from "class-validator";
import { eventStatus } from "./../entities/event.entity";
import { Users } from 'src/users/entities/user.entity';

export class UpdateEventDto extends PartialType(CreateEventDto) {
  // @IsString()
  // name: string;

  // @IsString()
  // description: string;

  // @IsEnum(eventStatus)
  // status;

  // @IsDateString()
  // date: Date;

  @IsEmail()
  userEmail: string;
}
