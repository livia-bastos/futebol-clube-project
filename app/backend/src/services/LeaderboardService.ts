// import { ILeaderboard } from '../Interfaces/leaderboard/ILeaderboard';
// import { ILeaderboardModel } from '../Interfaces/leaderboard/ILeaderboardsModel';
// import { ServiceResponse } from '../Interfaces/ServiceResponse';
// import LeaderboardModel from '../models/LeaderboardModel';

// export default class LeaderboardService {
//   constructor(
//     private leaderboardModel: ILeaderboardModel = new LeaderboardModel(),
//   ) { }

//   public async getAllResults(): Promise<ServiceResponse<ILeaderboard[]>> {
//     const allResults = await this.leaderboardModel.findAll();
//     return { status: 'SUCCESSFUL', data: allResults };
//   }
// }
