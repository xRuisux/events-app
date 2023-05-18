import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({
    description: 'O campo email será unico para cada usuário e utilizado para login',
    example: 'test@test.com'
  })
  email: string;

  
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password is too weak'})
  @ApiProperty({
    description: 'O campo senha é precisa ter: tamanho minimo de 8 caracteres, ter letra maiuscula, letra maiúscula, simbolo especial e numeros.',
    example: 'Abc@1234'
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'Nome',
    example: 'João'
  })
  firstName: string;

  @IsString()
  @ApiProperty({
    description: 'Sobrenome',
    example: 'Lima'
  })
  lastName: string;

  @IsDateString()
  @ApiProperty({
    description: 'Data de aniversário seguindo o formato: yyyy-mm-dd',
    example: '1990-12-20'
  })
  birthday: Date;
}