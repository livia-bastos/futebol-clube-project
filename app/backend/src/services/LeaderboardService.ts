import { ITeam } from '../Interfaces/teams/ITeams';
import MatchesModel from '../models/MatchesModel';
import { ILeaderboard } from '../Interfaces/leaderboard/ILeaderboard';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import TeamModel from '../models/TeamModel';
import { IMatches } from '../Interfaces/matches/IMatches';

export default class LeaderboardService {
  constructor(
    private matchesModel = new MatchesModel(),
    private teamModel = new TeamModel(),
  ) { }

  static getWLDHome(id: number, matches: IMatches[]): number[] {
    let [w, l, d, gf, go] = [0, 0, 0, 0, 0];
    matches.forEach(({ homeTeamId, awayTeamGoals, homeTeamGoals }) => {
      if (homeTeamId === id) {
        gf += homeTeamGoals;
        go += awayTeamGoals;
        if (homeTeamGoals > awayTeamGoals) w += 1;
        if (homeTeamGoals < awayTeamGoals) l += 1;
        if (homeTeamGoals === awayTeamGoals) d += 1;
      }
    });
    return [w, l, d, gf, go];
  }

  private static createLeaderBoard(teams: ITeam[], matches: IMatches[]): ILeaderboard[] {
    const leaderboard: ILeaderboard[] = teams.map((team) => {
      const [w, l, d, gf, go] = LeaderboardService.getWLDHome(team.id, matches);
      return {
        name: team.teamName,
        totalPoints: w * 3 + d,
        totalGames: w + l + d,
        totalVictories: w,
        totalDraws: d,
        totalLosses: l,
        efficiency: Number((100 * ((w * 3 + d) / ((w + l + d) * 3))).toFixed(2)),
        goalsBalance: gf - go,
        goalsFavor: gf,
        goalsOwn: go,
      };
    });
    return leaderboard;
  }

  public async getAllResults(): Promise<ServiceResponse<ILeaderboard[]>> {
    const matches = await this.matchesModel.findInProgress('false');
    const teams = await this.teamModel.findAll();
    const leaderboard = LeaderboardService.createLeaderBoard(teams, matches);
    const sorted = leaderboard.sort((team1, team2) => {
      // > 0 team1 depois do team2
      // < 0 team1 antes do team2
      if (team1.totalPoints !== team2.totalPoints) return team2.totalPoints - team1.totalPoints;
      if (team1.totalVictories !== team2.totalVictories) {
        return team2.totalVictories - team1.totalVictories;
      }
      if (team1.goalsBalance !== team2.goalsBalance) {
        return team2.goalsBalance - team1.goalsBalance;
      }
      return team2.goalsFavor - team1.goalsFavor;
    });
    return { status: 'SUCCESSFUL', data: sorted };
  }
}
