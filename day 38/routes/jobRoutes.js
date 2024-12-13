const express = require("express");
const jobController = require("../controllers/jobController");

const jobRouter = express.Router();

jobRouter.get("/", jobController.getAllJobs);
jobRouter.get("/:id", jobController.getJobByID);
jobRouter.post("/", jobController.createJob);
jobRouter.put("/:id", jobController.updateJob);
jobRouter.delete("/:id", jobController.deleteJob);
module.exports = jobRouter;
