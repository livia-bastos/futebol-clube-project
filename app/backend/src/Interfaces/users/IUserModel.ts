import { IUser } from './IUser';

export interface IUserModel {
  findAll(data: Partial<IUser>): Promise<IUser[]>,
}
