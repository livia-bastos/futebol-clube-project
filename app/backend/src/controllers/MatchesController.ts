import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  constructor(
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
}
