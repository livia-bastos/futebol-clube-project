// import { ILeaderboard } from '../Interfaces/leaderboard/ILeaderboard';
// import SequelizeTeam from '../database/models/TeamModel';
// import SequelizeMatches from '../database/models/MatchesModel';
// import { NewEntity } from '../Interfaces';
// import TeamModel from './TeamModel';
// import MatchesModel from './MatchesModel';

// export default class LeaderboardModel implements MatchesModel extends TeamModel {
//   private model = SequelizeTeam;
//   private model = SequelizeMatches;

//   async create(data: NewEntity<ILeaderboard>): Promise<ILeaderboard> {
//     const dbData = await this.model.create(data);

//     const { name:,
//       totalPoints: totalVictories + totalDraws,
//       totalGames: {},
//       totalVictories: homeTeamGoals * 3
//       totalDraws: homeTeamGoals * 1,
//       totalLosses: awayTeamGoals * 3,
//       goalsFavor,
//       goalsOwn,
//       goalsBalance: { goalsFavor - goalsOwn},
//       efficiency: [totalPoints / (totalGames * 3)] * 100 }: ILeaderboard = dbData;
//     return { name,
//       totalPoints,
//       totalGames,
//       totalVictories,
//       totalDraws,
//       totalLosses,
//       goalsFavor,
//       goalsOwn,
//       goalsBalance,
//       efficiency };
//   };

//   async findAll(): Promise<ILeaderboard[]> {
//     const dbData = await this.model.findAll({ include: [
//       { model: SequelizeTeam,
//         as: 'name',
//         attributes: ['teamName'],
//       },
//       { model: SequelizeMatches,
//         as: 'awayTeam',
//         attributes: ['teamName'],
//       },
//     ] });
//     return dbData;
//   }
// }
