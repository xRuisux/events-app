import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tickets } from './entities/ticket.entity';
import { UsersService } from 'src/users/users.service';
import { EventsService } from 'src/events/events.service';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Tickets)
    private ticketsRepository: Repository<Tickets>,
    private readonly usersService: UsersService,
    private readonly eventsService: EventsService
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Tickets> {
    const existUser = await this.usersService.findOne(createTicketDto.userEmail);
    console.log(typeof createTicketDto.eventId);
    
    const existEvent = await this.eventsService.findOne(+createTicketDto.eventId);

    if (existUser && existEvent) {
      return await this.ticketsRepository.save({ user: existUser, event: existEvent });
    }
  }

  findAll() {
    return `This action returns all tickets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
