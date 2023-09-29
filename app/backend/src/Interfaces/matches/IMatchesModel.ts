import { IMatches } from './IMatches';

export interface IMatchesModel {
  create(data: Partial<IMatches>): Promise<IMatches>,
}
