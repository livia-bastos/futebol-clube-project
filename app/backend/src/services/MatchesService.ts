// import MatchesModel from '../models/MatchesModel';
// import { IMatches } from '../Interfaces/matches/IMatches';
// import { IMatchesModel } from '../Interfaces/matches/IMatchesModel';
// import { ServiceResponse } from '../Interfaces/ServiceResponse';

// export default class TeamService {
//   constructor(
//     private matchesModel: IMatchesModel = new MatchesModel(),
//   ) { }

//   public async findAll(): Promise<ServiceResponse<IUserResponse[]>> {
//     const allUsers = await this.matches.findAll();
//     const usersReturn = allUsers.map(({ id, name, email }) => ({ id, name, email }));
//     return { status: 'SUCCESSFUL', data: usersReturn };
//   }
// }
