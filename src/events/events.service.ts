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
    return await this.eventsRepository.find();
  }

  async findOne(id: number) {
    return await this.eventsRepository.findOneBy({ id });
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    
    return `This action updates a #${id} event`;
  }

  // async addUser(id, updateEventDto: UpdateEventDto) {
  //   const existEvent = await this.eventsRepository.findOne({where:{ id }, relations:['users']});
  //   const existUser = await this.usersService.findOne(updateEventDto.userEmail);

  //   console.log(existEvent);
  //   console.log(existUser);
    
  //   if (Object.getOwnPropertyNames(existEvent).includes('users')) {
  //     existEvent.users.push(existUser);
  //     return await this.eventsRepository.save(existEvent);
  //   }

  //   console.log(`teste : ${ JSON.stringify({ ...existEvent, existUser }) }`);
    
  //   return await this.eventsRepository.save({ ...existEvent, users: [existUser] })
  // }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
