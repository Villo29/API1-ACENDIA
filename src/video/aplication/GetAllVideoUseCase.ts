import { Video } from "../domain/video";
import { VideoRepository } from "../domain/video-repository";

export class GetAllVideo {
  constructor(private readonly videoRepository: VideoRepository) {}
  async execute(): Promise<Video[]> {
    const video = await this.videoRepository.getAll();
    return video;
  }
}
