import { ILeaderboard } from './ILeaderboard';

export interface IMatchesModel {

  findAll():Promise<ILeaderboard[]>
}
