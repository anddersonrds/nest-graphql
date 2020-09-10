import { Field, ObjectType } from '@nestjs/graphql';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from './user.entity';

@ObjectType()
@Entity({ name: 'messages' })
export default class Message {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ name: 'user_id' })
  userId: number;

  @Field()
  @Column()
  content: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: Date;

  @Field(() => User)
  user: User;

  @ManyToOne(() => User, (user) => user.messageConnection, { primary: true })
  @JoinColumn({ name: 'user_id' })
  userConnection: Promise<User>;
}
