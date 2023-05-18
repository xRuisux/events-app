import { Events } from './../../events/entities/event.entity';
import { Users } from './../../users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Tickets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;

  @ManyToOne(() => Users, (user) => user.tickets)
  user: Users;

  @ManyToOne(() => Events, (event) => event.tickets)
  event: Events;

  @Column()
  paymentId: number;

  @Column({ default: 'active' })
  ticket_status: ticketStatus;
};

export enum ticketStatus {
  ACTIVE = 'active',
  REFUNDED = 'refunded',
  USED = 'used'
};
