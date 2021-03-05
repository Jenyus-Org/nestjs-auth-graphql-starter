import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UpdateUserInput } from "./dto/update-user.input";
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

  async remove(id: number) {
    const res = await this.usersRepository.delete(id);
    return res.affected === 1;
  }
}
