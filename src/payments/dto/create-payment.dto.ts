import { IsNumber, IsObject, IsString,  } from "class-validator";
import { Type } from "class-transformer";

export class CreatePaymentDto {
  @IsNumber()
  @Type(() => Number)
  transaction_amount: number;

  @IsString()
  token: string;

  @IsString()
  description: string;

  @IsNumber()
  @Type(() => Number)
  installments: number;

  @IsString()
  issuer_id: string;

  @IsString()
  payment_method_id: string;

  @IsObject()
  payer: { email: string };
}