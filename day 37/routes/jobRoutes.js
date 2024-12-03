const express = require("express");
const jobController = require("../controllers/jobController");
const jobRouter = express.Router();

// define router for the job resource
jobRouter.get("/", jobController.getJobs);
jobRouter.get("/:id", jobController.getJob);
jobRouter.post("/", jobController.createJob);
jobRouter.put("/:id", jobController.updateJob);
jobRouter.delete("/:id", jobController.daleteJob);

// export the Router
module.exports = jobRouter;
