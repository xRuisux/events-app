import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { UsersModule } from './../src/users/users.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Users } from './../src/users/entities/user.entity';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  const mockUser = {
      email: 'test356@appxapi.com',
      birthday: '2019-01-16',
      firstName: 'tester',
      lastName: 'user',
      id: 4,
      createdAt: '2023-05-18T12:09:21.000Z',
      isActive: true
  };

  const mockCreateUser = {
    email: 'test356@appxapi.com',
    birthday: '2019-01-16',
    firstName: 'tester',
    lastName: 'user',
    password: 'Abc*1234'
};

  const mockUsersRepository = {
    findOneBy: jest.fn().mockResolvedValue(null),
    find: jest.fn().mockResolvedValue([mockUser]),
    save: jest.fn().mockImplementation((user) => 
    Promise.resolve({
      id: 4, ...user 
    })
  ) 
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    })
    .overrideProvider(getRepositoryToken(Users))
    .useValue(mockUsersRepository)
    .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect([mockUser]);
  });

  it('/users (POST)', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send(mockCreateUser)
      .expect(201)
      .then(response => {
        expect(response.body).toEqual({
          id: expect.any(Number),
          birthday: '2019-01-16',
          email: 'test356@appxapi.com',
          firstName: 'tester',
          lastName: 'user',
        })
      });
  });

  it('/users (POST) -> validation error', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({ ...mockCreateUser, email: 'test' })
      .expect(400, {
        statusCode: 400,
        message: [ 'email must be an email' ],
        error: 'Bad Request'
      })
  });
});
