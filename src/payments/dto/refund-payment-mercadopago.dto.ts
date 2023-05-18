import { IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from '@nestjs/swagger';

export class RefundPaymentMercadoPago {
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({
    description: 'Valor do estorno',
    example: 100
  })
  amount: number;
}