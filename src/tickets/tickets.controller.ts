import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tickets')
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto);
  }

  @Get()
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketsService.findOne(+id);
  }
}
