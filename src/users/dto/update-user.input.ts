import { InputType, PartialType } from "@nestjs/graphql";
import { UserObject } from "./user.object";

@InputType()
export class UpdateUserInput extends PartialType(UserObject, InputType) {}
