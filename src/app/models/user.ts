import { IUser } from "./iuser";

export class User implements IUser {
    id!: number;
    username!: string;
    password!: string;
    historySearches: string[] = [];
}