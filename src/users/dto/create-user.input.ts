import { InputType, OmitType } from "@nestjs/graphql";
import { UserObject } from "./user.object";

@InputType()
export class CreateUserInput extends OmitType(
  UserObject,
  ["id"] as const,
  InputType,
) {}
