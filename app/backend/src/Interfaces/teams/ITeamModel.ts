import { ITeam } from '../Teams';

export interface IteamModel {
  create(data: Partial<ITeam>): Promise<ITeam>,
}
