import { Users } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Events {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;

  @Column({ default: 'active' })
  status: eventStatus;

  @ManyToMany(() => Users)
  @JoinTable()
  users: Users[];
};

export enum eventStatus {
  ACTIVE = 'active',
  CANCELED = 'canceled',
  FINISHED = 'finished'
};