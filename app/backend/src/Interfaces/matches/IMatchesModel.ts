import { IMatches } from './IMatches';

export interface IMatchesModel {
  create(data: Partial<IMatches>): Promise<IMatches>,

  findAll():Promise<IMatches[]>,

  findInProgress(inProgress: string):Promise<IMatches[]>,
}
