const Job = require("../models/job");

const jobController = {
  getAllJobs: async (req, res) => {
    try {
      const jobs = await Job.find();
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getJobByID: async (req, res) => {
    try {
      const { id } = req.params;
      const jobs = await Job.findById(id);
      if (!jobs) {
        res.status(404).json({ message: "job not found" });
      }
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createJob: async (req, res) => {
    try {
      //extract the job details from the request body
      const { title, description, location, salary, experience, skills } =
        req.body;
      // create the new job object with the extracted details
      const newJob = new Job({
        title,
        description,
        location,
        salary,
        experience,
        skills,
      });
      // save the new job object to the database
      await newJob.save();
      res.status(201).json(newJob);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateJob: async (req, res) => {
    try {
      const { id } = req.params;
      const { title } = req.body;
      const job = await Job.findById(id);
      job.title = title;
      await job.save();
      res.status(200).json({ message: "job updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteJob: async (req, res) => {
    try {
      const { id } = req.params;
      const job = await Job.findByIdAndDelete(id);
      if (!job) {
        res.status(404).json({ message: "job not found" });
      }
      res.status(200).json({ message: "Job Deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = jobController;
