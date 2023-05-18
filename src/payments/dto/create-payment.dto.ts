import { IsNumber, IsObject, IsString,  } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({
    description: 'Custo do produto',
    example: 100
  })
  transaction_amount: number;

  @IsString()
  @ApiProperty({
    description: 'Identificador de token card (obrigatório para cartão de crédito).' +
     'O token do cartão é criado a partir das próprias informações do cartão, aumentando' +
     ' a segurança durante o fluxo do pagamento. Além disso, uma vez que o token é utilizado' +
     ' em determinada compra, ele é descartado, sendo necessária a criação de um novo token para compras futuras.',
    example: 'db428526588c754dc04da7b6e5ac191d'
  })
  token: string;

  @IsString()
  @ApiProperty({
    description: 'O campo email será unico para cada usuário e utilizado para login',
    example: 'test@test.com'
  })
  description: string;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({
    description: 'Número de parcelas selecionado',
    example: 3
  })
  installments: number;

  @IsString()
  @ApiProperty({
    description: 'É o identificador do emissor do cartão que está sendo utilizado em um pagamento com cartão de crédito ou débito.',
    example: 25
  })
  issuer_id: string;

  @IsString()
  @ApiProperty({
    description: 'Indica o identificador do meio de pagamento selecionado para efetuar o pagamento.',
    example: 'visa'
  })
  payment_method_id: string;

  @IsObject()
  @ApiProperty({
    description: 'Id do pagador.',
    example: '{ email: test@test.com }',
    type: 'Object'
  })
  payer: { email: string };
}