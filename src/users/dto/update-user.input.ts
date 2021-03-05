import {
  InputType,
  IntersectionType,
  PartialType,
  PickType,
} from "@nestjs/graphql";
import { CreateUserInput } from "./create-user.input";
import { UserObject } from "./user.object";

@InputType()
export class UpdateUserInput extends IntersectionType(
  PickType(UserObject, ["id"] as const, InputType),
  PartialType(CreateUserInput),
) {}
