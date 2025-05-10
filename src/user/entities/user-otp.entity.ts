/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserOtp {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    otp:string;

    @Column()
    userId: number;

    @CreateDateColumn({ type:'timestamp'})
    createdAt: Date;
    
    @ManyToOne(() => User, (user) => {
        console.log(user)
        return user.otp}, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      })
      @JoinColumn({
        name: 'user_id',
        referencedColumnName: 'id',
        foreignKeyConstraintName: `FK__user_otp`,
      })
      public user?: User;

}
