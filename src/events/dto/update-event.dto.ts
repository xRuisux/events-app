import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
import { IsDateString, IsEmail, IsEnum, IsString,  } from "class-validator";
import { eventStatus } from "./../entities/event.entity";

export class UpdateEventDto extends PartialType(CreateEventDto) {}
