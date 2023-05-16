import { Events } from 'src/events/entities/event.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

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

  @ManyToMany(() => Events, (event) => event.users)
  events: Events[]
}