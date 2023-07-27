import { Video } from "./video";

export interface VideoRepository {
  getAll(): Promise<Video[]>;
  
}
