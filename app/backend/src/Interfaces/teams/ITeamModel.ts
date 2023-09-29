import { ITeam } from './ITeams';

export interface IteamModel {
  create(data: Partial<ITeam>): Promise<ITeam>,
}
