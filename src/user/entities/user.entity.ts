/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserOtp } from "./user-otp.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column({unique:true})
    email:string;

    @OneToMany(() => UserOtp, (a) => {
        console.log(a);
        return a.user;
    })
    public otp?: UserOtp[];
}
