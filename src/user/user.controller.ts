import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id') 
  getUser(@Param('id') id : number) : Promise<User[]> {
    return this.userService.getUser(id)
  }

  @Patch("/update")
  updateUser(@Body() user :User ) {
    return this.userService.updateUser(user)
  }

  @Get("/email/:email")
  getUserByEmail(@Param('email') email : string) : Promise<User> {
    const user =  this.userService.getUserByEmail(email)
    return user;
  }
}
