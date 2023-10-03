import SequelizeTeam from '../database/models/TeamModel';
import SequelizeUser from '../database/models/MatchesModel';
import { IMatches } from '../Interfaces/matches/IMatches';
import { IMatchesModel } from '../Interfaces/matches/IMatchesModel';
import { NewEntity } from '../Interfaces';

export default class MatchesModel implements IMatchesModel {
  private model = SequelizeUser;

  async create(data: NewEntity<IMatches>): Promise<IMatches> {
    const dbData = await this.model.create(data);

    const { id, homeTeamId, homeTeamGoals,
      awayTeamId, awayTeamGoals, inProgress }: IMatches = dbData;
    return { id, homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals, inProgress };
  }

  async findAll(): Promise<IMatches[]> {
    const dbData = await this.model.findAll({ include: [
      { model: SequelizeTeam,
        as: 'homeTeam',
        attributes: ['teamName'],
      },
      { model: SequelizeTeam,
        as: 'awayTeam',
        attributes: ['teamName'],
      },
    ] });
    return dbData;
  }

  async findInProgress(inProgress: string): Promise<IMatches[]> {
    const dbData = await this.model.findAll({ include: [
      { model: SequelizeTeam,
        as: 'homeTeam',
        attributes: ['teamName'],
      },
      { model: SequelizeTeam,
        as: 'awayTeam',
        attributes: ['teamName'],
      },
    ],
    where: { inProgress: JSON.parse(inProgress) },
    });
    return dbData;
  }
}
