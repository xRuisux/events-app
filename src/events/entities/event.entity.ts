import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;

  @Column({ default: 'active' })
  status: eventStatus;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];
};

enum eventStatus {
  ACTIVE = 'active',
  CANCELED = 'canceled',
  FINISHED = 'finished'
};