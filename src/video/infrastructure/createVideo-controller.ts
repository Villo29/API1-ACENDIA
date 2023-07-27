import { Request, Response } from "express";

import { PostVideo } from "../aplication/CreateVideo";

export class CreateVideoController {
  constructor(private readonly postVideo: PostVideo) {}

  async createVideo(req: Request, res: Response) {
    const Personas = req.body.Personas;
    const Contador = req.body.Contador;

    const resultado = await this.postVideo.createVideo(
      Contador,
      Personas,
    );
    console.log("controller", resultado.Personas);
    res
      .status(200)
      .send(
        `se detecto ${resultado.Personas} personas`
      );
  }
}
