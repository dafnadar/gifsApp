import { IUser } from "./iuser";

export class User implements IUser {
    username!: string;
    password!: string;
}