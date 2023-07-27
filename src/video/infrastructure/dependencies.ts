import { PostVideo } from "../aplication/CreateVideo";
import { GetAllVideo } from "../aplication/GetAllVideoUseCase";
import { CreateVideoController } from "./createVideo-controller";
import { InMemoryVideoRepository } from "./createVideorepository";
import { VideoController } from "./video-controller";
import { AddVideoRepository } from "./video-repository";

const videoRepository = new InMemoryVideoRepository();
const getAllVideoUseCase = new GetAllVideo(videoRepository);
const videoController = new VideoController(getAllVideoUseCase); 

export { getAllVideoUseCase, videoController };

const videoRepositor = new AddVideoRepository();
const createVideo = new PostVideo(videoRepositor);
const PostVideoController = new CreateVideoController(createVideo);

export { createVideo, PostVideoController };