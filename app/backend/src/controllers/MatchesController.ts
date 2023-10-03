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
}
