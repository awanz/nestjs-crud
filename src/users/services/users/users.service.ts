import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ){}

    findUsers(){
        return this.userRepository.find();
    }

    createUser(userDetail: CreateUserParams){
        const newUser = this.userRepository.create({
            username: userDetail.username,
            password: userDetail.password,
        })
        return this.userRepository.save(newUser);
    }

    updateUser(username: String, updateUser: UpdateUserParams){
        this.userRepository.update({ username }, { ...updateUser });
    }

    deleteUser(username: string){
        this.userRepository.delete({ username });
    }
}
