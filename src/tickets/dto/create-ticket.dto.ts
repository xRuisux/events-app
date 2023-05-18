import { Type } from "class-transformer";
import { IsEmail, IsNumber } from "class-validator";

export class CreateTicketDto {
  @IsEmail()
  userEmail: string;

  @IsNumber()
  @Type(() => Number)
  eventId: number;

  @IsNumber()
  @Type(() => Number)
  paymentId: number;
}
