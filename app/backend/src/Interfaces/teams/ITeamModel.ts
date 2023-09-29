import { ITeam } from './ITeams';

export interface ITeamModel {
  create(data: Partial<ITeam>): Promise<ITeam>,
  findAll(): Promise<ITeam[]>,
  findById(id: ITeam['id']): Promise<ITeam | null>
}
