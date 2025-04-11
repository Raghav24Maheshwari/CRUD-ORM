/* eslint-disable prettier/prettier */
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserOtp } from "./user-otp.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: false })
  isDeleted: boolean;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt?: Date;

  @OneToMany(
    () => UserOtp,
    (a) => {
      console.log(a);
      return a.user;
    }
  )
  public otp?: UserOtp[];
}
