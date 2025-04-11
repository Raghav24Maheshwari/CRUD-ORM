/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
   await this.userService.create(createUserDto);
   return {message: 'User created successfully'}
  }

  @Get('/admin')
  async findAllForAdmin() {
    const user = await  this.userService.findAllForAdmin();
    return {
      success:true,
      user,
      message:'user read successfully.'
    }
  }

  @Get()
  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 5,
    @Query('firstName') firstName?: string,
    @Query('lastName') lastName?: string,
    @Query('email') email?: string
  ) {
    const filters = { firstName, lastName, email };
    const result = await this.userService.findAll(+page, +limit, filters);
    return {
      success: true,
      ...result,
      message: 'Users fetched successfully.'
    };
  }
  


  @Get(':id')
  async findOne(@Param('id') id: string) {
      const user = await this.userService.findOne(+id)
      return {
        success:true,
        user,
        message:'user read successfully.'
      }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const data = await this.userService.update(+id,updateUserDto);
    return  {
      success:true,
      data,
      message:'user update successfully.'
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.userService.remove(+id);
    return  {
      success:true,
      message:'user delete successfully.'
    }
  }

  @Get(':id/otps')
  async getAllUserOtps(@Param('id') id: number){
await this.userService.getUserOpts(id);
return {
  success: true,
  maessage: 'successfully'
}
  }
}
