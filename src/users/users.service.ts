import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserInput, UpdateUserInput } from "src/graphql";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput | CreateUserDto) {
    return this.usersRepository.save(createUserInput);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ id });
  }

  update(id: number, updateUserInput: UpdateUserInput | UpdateUserDto) {
    return this.usersRepository.update(id, updateUserInput);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
