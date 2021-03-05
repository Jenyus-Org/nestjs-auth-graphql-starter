import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { UsersService } from "./users.service";

@Resolver("User")
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation("createUser")
  create(@Args("createUserInput") createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query("users")
  findAll() {
    return this.usersService.findAll();
  }

  @Query("user")
  findOne(@Args("id") id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation("updateUser")
  update(@Args("updateUserInput") updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation("removeUser")
  remove(@Args("id") id: number) {
    return this.usersService.remove(id);
  }
}
