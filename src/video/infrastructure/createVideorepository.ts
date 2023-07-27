import { createPool } from "../../mysql";
import { Video } from "../domain/video";
import { VideoRepository } from "../domain/video-repository";

export class InMemoryVideoRepository implements VideoRepository {
  async getAll(): Promise<Video[]> {
    console.log("Entered InMemoryVideoRepository getAll");
    const connection = await createPool();
    const result: any[] = await connection.query("SELECT * FROM 4letras");

    if (result.length === 0) {
      return [];
    }
    const video: any[] = result[0];
    console.log(`prueba ${JSON.stringify(video)}`);
    return video.map((video) => {
      return new Video(
        video.Contador,
        video.Personas
      );
    });
  }
}
