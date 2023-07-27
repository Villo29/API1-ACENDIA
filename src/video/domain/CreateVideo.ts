import { Video } from "./video";

export interface CreateVideo {
  addVideo(
    Contador: string,
    Personas: string
  ): Promise<Video | null>;
}
