/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
@IsNotEmpty()
@IsString()
firstName: string;

@IsNotEmpty()
@IsString()
lastName: string;

@IsNotEmpty()
@IsEmail()
email: string;
}
