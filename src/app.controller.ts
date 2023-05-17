import { Get, Controller, Render } from '@nestjs/common';
import { IsPublic } from './auth/decorators/is-public.decorator';

@Controller()
export class AppController {
  @IsPublic()
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}