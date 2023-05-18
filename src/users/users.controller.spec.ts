import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let userController: UsersController;
  const mockCreateUserDto = {
    email: 'test@test.com',
    password: 'Abc@1234',
    firstName: 'João',
    lastName: 'Lima',
    birthday: new Date('1990-12-20')
  };

  const mockUpdateUserDto = {
    email: 'test@test.com',
    firstName: 'João ',
    lastName: 'Cardoso',
  }

  const mockUserService = {
    create: jest.fn(mockCreateUserDto => {
      return {
        id: Math.random(),
        ...mockCreateUserDto
      }
    }),
    update: jest.fn((email, mockUpdateUserDto) => {
      return { 
        id : 1,
      ...mockUpdateUserDto,
      }
    })
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUserService)
      .compile();

    userController = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  it('should create a user', () => {
    expect(userController.create(mockCreateUserDto)).toEqual({ id: expect.any(Number), ...mockCreateUserDto });
  });

  it('should update a user', () => {
    expect(userController.update('test@test.com' , mockUpdateUserDto)).toEqual({ id: 1 , ...mockUpdateUserDto });
  });
});
