import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
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
    console.log(`createTicketDto: ${JSON.stringify(createTicketDto)}`);
    
    const existEvent = await this.eventsService.findOne(+createTicketDto.eventId);

    if (existUser && existEvent) {
      return await this.ticketsRepository.save({ user: existUser, event: existEvent, paymentId: createTicketDto.paymentId });
    }
  }

  async remove(id: number) {
    return await this.ticketsRepository.delete({ paymentId: id })
  }
}
