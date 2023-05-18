import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.usersRepository.findOneBy({ email: createUserDto.email });

    if (existUser) {
      return { message: 'Email address already exists.'}
    }

    const user = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.usersRepository.save(user);

    return {...createdUser, password: undefined};
  }

  async update(email: string, updateUserDto: UpdateUserDto) {
    const existUser = await this.usersRepository.findOneBy({ email });
    
    if (existUser) {
      const id = existUser.id

      return await this.usersRepository.save({ id, ...updateUserDto });
    }
    
    return `This user does not exist.`;
  }

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.find({relations: { tickets: true }});
  }

  async findOne(email: string): Promise<Users | null> {
    return await this.usersRepository.findOne({ relations: { tickets: true }, where: { email }});
  }

  async findByEmail(email: string): Promise<Users | null> {
    return await this.usersRepository.findOne({
      select: ['id', 'email', 'password'],
      where: { email },
    });
  }

  async remove(email: string): Promise<void> {
    await this.usersRepository.delete(email);
  }
}
