import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'host.docker.internal',
  port: 3307,
  username: 'root',
  password: 'root',
  database: 'eventsapp_database',
  entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
  synchronize: true,
}