import { UseGuards } from "@nestjs/common";
import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserInputError } from "apollo-server-express";
import { GqlCurrentUser } from "../auth/decorator/gql-current-user.decorator";
import { GqlAuthGuard } from "../auth/guards/gql-auth.guard";
import { UpdateUserInput } from "./dto/update-user.input";
import { UserObject } from "./dto/user.object";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";

@Resolver("User")
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserObject])
  users() {
    return this.usersService.findAll();
  }

  @Query(() => UserObject)
  user(
    @Args("id", { type: () => Int }) id?: number,
    @Args("username", { nullable: true }) username?: string,
  ) {
    if (!id && !username) {
      throw new UserInputError("Arguments must be one of ID or username.");
    }
    return this.usersService.findOne({ id, username });
  }

  @Mutation(() => UserObject)
  updateProfile(@Args("updateUserInput") updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Query(() => UserObject)
  @UseGuards(GqlAuthGuard)
  me(@GqlCurrentUser() user: User) {
    return user;
  }
}
