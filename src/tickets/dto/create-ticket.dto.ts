import { Type } from "class-transformer";
import { IsEmail, IsNumber } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDto {
  @IsEmail()
  @ApiProperty({
    description: 'Email do usuário',
    example: 'test@test.com'
  })
  userEmail: string;

  @IsNumber()
  @ApiProperty({
    description: 'Id do evento',
    example: 2
  })
  @Type(() => Number)
  eventId: number;

  @IsNumber()
  @ApiProperty({
    description: 'Id do pagamento',
    example: 1312984482
  })
  @Type(() => Number)
  paymentId: number;
}
