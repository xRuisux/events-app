import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

describe('UsersService', () => {
  let service: UsersService;

  const mockCreateUserDto : CreateUserDto = {
    email: 'test56@test.com',
    password: 'Abc@1234',
    firstName: 'João',
    lastName: 'Lima',
    birthday: new Date('1990-12-20')
  };

  const mockUsersRepository = {
    findOneBy: jest.fn(email => {
      Promise.resolve({
        id: 1,
        ...mockCreateUserDto,
        password: undefined
      })
    }),
    save: jest.fn().mockImplementation((user) => 
      Promise.resolve({
        id: Math.random(), ...user 
      })
    ) 
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, 
      {
        provide: getRepositoryToken(Users),
        useValue: mockUsersRepository,
      }],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  it('should create a new user and return the user', async () => {
    expect(await service.create({ ...mockCreateUserDto})).toEqual({
      id: expect.any(Number),
      ... mockCreateUserDto,
      password: undefined
    });
  });
});
