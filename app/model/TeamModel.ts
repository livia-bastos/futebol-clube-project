import Sequelize from '../backend/src/database/models/TeamModel'
import { ITeam } from '../backend/src/Interfaces/Teams'
import { IteamModel } from '../backend/src/Interfaces/teams/ITeamModel';
import { NewEntity } from '../backend/src/Interfaces';

export default class BookModel implements IteamModel {
  private model = Sequelize;

  async create(data: NewEntity<ITeam>): Promise<ITeam> {
    const dbData = await this.model.create(data);

    const { id, teamName, }: ITeam = dbData;
    return { id, teamName, };
  }
}