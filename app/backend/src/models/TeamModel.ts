import SequelizeTeam from '../database/models/TeamModel';
import { ITeam } from '../Interfaces/teams/ITeams';
import { IteamModel } from '../Interfaces/teams/ITeamModel';
import { NewEntity } from '../Interfaces';

export default class TeamModel implements IteamModel {
  private model = SequelizeTeam;

  async create(data: NewEntity<ITeam>): Promise<ITeam> {
    const dbData = await this.model.create(data);

    const { id, teamName }: ITeam = dbData;
    return { id, teamName };
  }
}
