import { Tickets } from './../../tickets/entities/ticket.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToMany } from 'typeorm';

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

  @OneToMany(() => Tickets, (ticket) => ticket.event)
  tickets: Tickets[];

  @Column()
  price: number;
};

export enum eventStatus {
  ACTIVE = 'active',
  CANCELED = 'canceled',
  FINISHED = 'finished'
};