import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';
import TeamService from '../services/TeamService';

export default class MatchesController {
  constructor(
    private teamService = new TeamService(),
    private matchesService = new MatchesService(),
  ) { }

  public async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    let serviceResponse;
    if (!inProgress) {
      serviceResponse = await this.matchesService.getAllMatches();
    } else {
      serviceResponse = await this.matchesService.getInProgress(inProgress);
    }
    return res.status(200).json(serviceResponse.data);
  }

  public async updateMatch(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    let match;
    let message;
    console.log(req.body.awayTeamGoals);
    if (!req.body.awayTeamGoals) {
      match = { inProgress: false };
      message = 'Finished';
    } else {
      match = req.body;
    }
    const serviceResponse = await this.matchesService.updateMatch(id, match);
    if (message) {
      return res.status(200).json({ message });
    }

    return res.status(200).json(serviceResponse.data);
  }

  public async createMatch(req: Request, res: Response): Promise<Response> {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
    if (awayTeamId === homeTeamId) {
      return res.status(422).json({
        message: 'It is not possible to create a match with two equal teams' });
    }
    const findingHomeTeam = await this.teamService.getTeamById(Number(homeTeamId));
    const findingAwayTeam = await this.teamService.getTeamById(Number(awayTeamId));
    console.log(findingAwayTeam);
    if (findingAwayTeam.status === 'NOT_FOUND' || findingHomeTeam.status === 'NOT_FOUND') {
      return res.status(404).json({
        message: 'There is no team with such id!' });
    }
    const serviceResponse = await this.matchesService
      .createMatch(homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals);
    return res.status(201).json(serviceResponse.data);
  }
}
