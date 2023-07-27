import express from "express";

import { videoController } from "./dependencies";
import { PostVideoController } from "./dependencies";

const videoRouter = express.Router();
videoRouter.get("/", videoController.getAllVideo.bind(videoController));
videoRouter.post("/", PostVideoController.createVideo.bind(PostVideoController));

export { videoRouter };
