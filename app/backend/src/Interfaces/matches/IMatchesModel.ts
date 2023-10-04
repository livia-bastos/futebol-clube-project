import { NewEntity } from '..';
import { IMatches } from './IMatches';

export interface IMatchesModel {
  // findById(id: IMatches['id']): Promise<IMatches | null>
  update(id: IMatches['id'], data: Partial<NewEntity<IMatches>>): Promise<number>,
  create(data: Partial<IMatches>): Promise<IMatches>,
  findAll():Promise<IMatches[]>,
  findInProgress(inProgress: string):Promise<IMatches[]>,
}
