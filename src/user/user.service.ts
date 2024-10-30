import { Injectable } from '@nestjs/common';
import prismaObj from 'middlewares/prisma.middleware';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  
  async getUserByEmail (email : string): Promise<User>  {
    const user = await prismaObj.user.findFirst({where : {email : {equals : email}}})
    return user;
  }
  
  async getUser(id : number): Promise<User[]> {
    return await prismaObj.user.findMany({where : {id : Number(id)}})
  }
  
  async addUser(user : User) : Promise<number> {
    const userRes = await prismaObj.user.create({data : user}).catch(error => console.error("Error ",error));
    if(userRes) {
      console.log("User is created successfully with id ",userRes.id);
      return userRes.id;
    }
  }

  async updateUser(user : User) : Promise<number> {
    const {id ,password ,...userData} = user;
    console.log("id :: ",id)
    if(user.id) {
      const userRes = await prismaObj.user.update({data : userData , where : {id : Number(id)}});
      console.log("User is updated successfully with id ",userRes.id);
      return userRes.id;
    }
  }

  deleteUser() {

  }
}
