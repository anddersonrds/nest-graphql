import { Field, ObjectType } from '@nestjs/graphql';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Message from './message.entity';

ObjectType();
@Entity('users')
export default class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: Date;

  @OneToMany(() => Message, (message) => message.userConnection)
  messageConnection: Promise<Message[]>;
}
