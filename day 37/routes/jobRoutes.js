const express = require('express');
const jobController = require('../controllers/jobController');
const jobRouter = express.Router();

// define router for the job resource
jobRouter.get('/', jobController.getJob);

jobRouter.post('/', jobController.createJob);

// export the Router
module.exports = jobRouter;