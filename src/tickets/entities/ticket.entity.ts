import { Events } from 'src/events/entities/event.entity';
import { Users } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class Tickets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;

  @ManyToOne(() => Users, (user) => user.tickets)
  user: Users

  @ManyToOne(() => Events, (event) => event.tickets)
  event: Events
}
