import SequelizeUser from '../database/models/UserModel';
import { IUser } from '../Interfaces/users/IUser';
import { IUserModel } from '../Interfaces/users/IUserModel';
import { NewEntity } from '../Interfaces';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findAll(data: NewEntity<IUser>): Promise<IUser[]> {
    const dbData = await this.model.findAll({ where: data });

    const users: IUser[] = dbData;
    return users;
  }
}
