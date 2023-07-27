import { createPool } from "../../mysql";
import { CreateVideo } from "../domain/CreateVideo";
import { Video } from "../domain/video";


export class AddVideoRepository implements CreateVideo{
  async addVideo(
    Contador: string,
    Personas: string,
  ): Promise<Video | null> {
    const connection = await createPool();
    try {
      const query = `INSERT INTO hubMax ( Contador, Personas) VALUES (?, ?)`;
      const values = [
        Contador,
        Personas
      ];
      await connection.query(query, values);

      const video = new Video(
        Contador,
        Personas
      );

      return video;
    } catch (error) {
      throw new Error(`No se pudo agregar: ${error}`);
    } finally {
      connection.end();
    }
  }
}