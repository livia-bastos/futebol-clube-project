// import { NewEntity } from '../interfaces';
// import TeamModel from '../models/TeamModel';
import MatchesModel from '../models/MatchesModel';
import { IMatches } from '../Interfaces/matches/IMatches';
import { IMatchesModel } from '../Interfaces/matches/IMatchesModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class MatchesService {
  constructor(
    private matchesModel: IMatchesModel = new MatchesModel(),
  ) { }

  public async getAllMatches(): Promise<ServiceResponse<IMatches[]>> {
    const allMatches = await this.matchesModel.findAll();
    return { status: 'SUCCESSFUL', data: allMatches };
  }

  public async getInProgress(inProgress: any): Promise<ServiceResponse<IMatches[]>> {
    const matches = await this.matchesModel.findInProgress(inProgress);
    return { status: 'SUCCESSFUL', data: matches };
  }

  public async updateMatch(id: number, match: IMatches): Promise<ServiceResponse<number>> {
    const updatedMatch = await this.matchesModel.update(id, match);

    return { status: 'SUCCESSFUL', data: updatedMatch };
  }

  public async createMatch(homeTeamId: number, homeTeamGoals:
  number, awayTeamId: number, awayTeamGoals: number): Promise<ServiceResponse<IMatches>> {
    const createdMatch = await this.matchesModel
      .create({ homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals, inProgress: true });

    return { status: 'SUCCESSFUL', data: createdMatch };
  }
}
