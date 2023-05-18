import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Events } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Events)
    private eventsRepository: Repository<Events>,
  ) {}

  async create(createEventDto: CreateEventDto) {
    return await this.eventsRepository.save(createEventDto);
  }

  async findAll() {
    return await this.eventsRepository.find({ relations: { tickets: true } });
  }

  async findOne(id: number) {
    return await this.eventsRepository.findOne({ relations: { tickets: true } , where: { id } });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const existEvent = await this.eventsRepository.findOneBy({ id });

    if (existEvent) {
      return await this.eventsRepository.save({ id, ...updateEventDto });
    }
    
    return `This event does not exists.`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
