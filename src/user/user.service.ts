/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}
  async create(createUserDto: CreateUserDto) {
    const {email} = createUserDto;
    const existingUser = await this.userRepository.findOne({
      where:{email},
    });
    if(existingUser) throw new BadRequestException('Email already exists');
    const newUser = this.userRepository.create(createUserDto)
    return await this.userRepository.save(newUser)
  }

  async findAll():Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number):Promise<User>  {
    const user = await this.userRepository.findOne({
      where:{id}
    })
    if(!user) throw new BadRequestException({message:'user not found'});
    return user
  }

  async update(id: number, updateUserDto: UpdateUserDto):Promise<User> {
    const user = await this.findOne(id)
    if(!user) throw new BadRequestException({message:'user not found'});
    const updateUser = this.userRepository.merge(user,updateUserDto);
    return this.userRepository.save(updateUser)
  }
  
  async remove(id: number) {
    const user = await this.findOne(id)
    if(!user) throw new BadRequestException({message:'user not found'});
    return await this.userRepository.remove(user)
  }
  
  async getUserOpts(userId: number): Promise<User>{
    console.log(userId);
    const userOtps = await this.userRepository.findOne({where:{
          id: userId
        },
      relations:{
    otp: true
  }})
console.log(userOtps)
return userOtps!
  }

  async deleteOtps(){
    
  }

  async addUserOtp(){

  }
}
