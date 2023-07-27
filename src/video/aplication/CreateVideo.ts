import { CreateVideo } from "../domain/CreateVideo";

export class PostVideo {
  constructor(private readonly addVideo: CreateVideo) {}

  async createVideo(
    Contador: string,
    Personas: string
  ) {
    try {
      const video = await this.addVideo.addVideo(
        Contador,
        Personas
      );
      if (!video) {
        throw new Error(`no se a detectado personas`);//${Personas}
      }
      return video;
    } catch (error) {
      throw error;
    }
  }
}
