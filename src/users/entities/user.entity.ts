import { Tickets } from 'src/tickets/entities/ticket.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  birthday: Date;

  @Column()
  email: string;

  @Column({select: false})
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
	createdAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Tickets, (ticket) => ticket.event)
  tickets: Tickets[]
}