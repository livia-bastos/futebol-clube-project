import bcryptjs = require('bcryptjs');
import { NewEntity } from '../Interfaces';
import UserModel from '../models/UserModel';
import { IUser } from '../Interfaces/users/IUser';
import { IUserModel } from '../Interfaces/users/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) { }

  public async allowLogin(user: NewEntity<IUser>): Promise<ServiceResponse<IUser[]> | undefined> {
    const foundUser = await this.userModel.findAll({
      email: user.email,
    });

    if (foundUser.length === 0
      || await bcryptjs.compare(user.password, foundUser[0].password) === false) {
      return;
    }

    return { status: 'SUCCESSFUL', data: foundUser };
  }
}
