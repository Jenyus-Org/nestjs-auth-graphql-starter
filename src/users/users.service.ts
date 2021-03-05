import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UpdateUserInput } from "./dto/update-user.input";
import { User } from "./entities/user.entity";

interface FindOneArgs {
  id?: number;
  username?: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserInput: Partial<User>) {
    return this.usersRepository.save(createUserInput);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne({ id, username }: FindOneArgs) {
    if (id) {
      return await this.usersRepository.findOne(id);
    } else if (username) {
      return await this.usersRepository
        .createQueryBuilder()
        .where("LOWER(username) = LOWER(:username)", { username })
        .getOne();
    } else {
      throw new Error("One of ID or username must be provided.");
    }
  }

  update(id: number, updateUserInput: UpdateUserInput | UpdateUserDto) {
    return this.usersRepository.update(id, updateUserInput);
  }

  async remove(id: number) {
    const res = await this.usersRepository.delete(id);
    return res.affected === 1;
  }
}
