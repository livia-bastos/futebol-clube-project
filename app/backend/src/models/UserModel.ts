import SequelizeUser from '../database/models/UserModel';
import { IUser } from '../Interfaces/users/IUser';
import { IUserModel } from '../Interfaces/users/IUserModel';
import { NewEntity } from '../Interfaces';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async create(data: NewEntity<IUser>): Promise<IUser> {
    const dbData = await this.model.create(data);

    const { id, username, role, email, password }: IUser = dbData;
    return { id, username, role, email, password };
  }
}
