import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { UserObject } from "./dto/user.object";
import { UsersService } from "./users.service";

@Resolver("User")
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserObject])
  users() {
    return this.usersService.findAll();
  }

  @Query(() => UserObject)
  user(@Args("id", { type: () => Int }) id: number) {
    return this.usersService.findOne({ id });
  }

  @Mutation(() => UserObject)
  updateUser(@Args("updateUserInput") updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }
}
