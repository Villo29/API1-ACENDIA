import { Request, Response } from "express";

import { GetAllVideo } from "../aplication/GetAllVideoUseCase";

export class VideoController {
  constructor(private readonly getAllVideoUseCase: GetAllVideo) {}

  async getAllVideo(req: Request, res: Response) {
    try {
      const videos = await this.getAllVideoUseCase.execute();
      res.status(200).send(videos);
    } catch (error) {
      res.status(500).json({ error: "Failed to get hubMax" });
    }
  }
}
