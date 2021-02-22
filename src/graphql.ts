/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    id: number;
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
}

export class UpdateUserInput {
    id: number;
    firstName?: string;
    lastName?: string;
}

export class User {
    __typename?: 'User';
    id: number;
    username: string;
    firstName?: string;
    lastName?: string;
    createdAt: Date;
    updatedAt: Date;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: number): User | Promise<User>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): User | Promise<User>;
}
