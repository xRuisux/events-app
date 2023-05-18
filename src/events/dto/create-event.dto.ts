import { IsDateString, IsEnum, IsNumber, IsString,  } from "class-validator";
import { eventStatus } from "./../entities/event.entity";
import { Type } from "class-transformer";
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do evento.',
    example: 'Festival de inverno'
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição sobre o evento',
    example: 'Show para aproveitar a epoca de inverno'
  })
  description: string;

  @IsEnum(eventStatus)
  @ApiProperty({
    description: 'Enum com o status do evento podendo ser: active, canceled ou finished',
    example: 'active',
    type: 'enum'
  })
  status;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({
    description: 'Preço do ingresso do evento',
    example: 100
  })
  price: number;

  @IsDateString()
  @ApiProperty({
    description: 'Data do evento',
    example: '2023-10-10'
  })
  date: Date;
}
