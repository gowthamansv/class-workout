const { Console } = require("console");
const fs = require("fs");

//load the database
function loadDatabase() {
  const data = fs.readFileSync("./db.json");
  return JSON.parse(data);
}

// save the database
function saveDatabase(data) {
  fs.writeFileSync("./db.json", JSON.stringify(data));
}

const jobController = {
  getJobs: (req, res) => {
    const data = loadDatabase();
    res.json(data.jobs);
  },
  getJob: (req, res) => {
    const data = loadDatabase();
    const id = req.params.id;
    const job = data.jobs.filter((jobs) => jobs.id === id);

    if (job.length === 0) {
      res.status(404).json({ message: "job not found" });
      return;
    }

    res.json(job);
  },
  createJob: (req, res) => {
    // get the data form db.json
    const data = loadDatabase();

    //get the data from req.body
    const requestData = req.body;

    const job = {
      id: parseInt(data.jobs[data.jobs.length - 1].id) + 1,
      ...requestData,
    };

    // append the new job object to data.jobs array
    data.jobs.push(job);

    // save the data to the db.json
    saveDatabase(data);

    //return the new object as a response
    res.json(job);
  },
  updateJob: (req, res) => {
    // get the data form db.json
    const data = loadDatabase();

    //get the data from req.body
    const { title, location, company, description, isFavorite } = req.body;

    // get the job id from the request params
    const id = req.params.id;

    // find the index of the job object in the data.jobs array
    const index = data.jobs.findIndex((job) => job.id === id);

    // update the job object in the data.json array with new data
    data.jobs[index] = {
      ...data.jobs[index],
      title,
      location,
      company,
      description,
      isFavorite,
    };

    // save the data to the db.json
    saveDatabase(data);

    res.json(data.jobs[index]);
  },
  daleteJob: (req, res) => {
    // get the data form db.json
    const data = loadDatabase();
    // get the job id from the request params
    const id = req.params.id;
    // find the index of the job object in the data.jobs array
    const index = data.jobs.findIndex((job) => job.id === id);
    console.log(index);

    if (index === -1) {
      res.json({ message: "job not found" });
    }
    // remove the job object in the data.json array
    data.jobs.splice(index, 1);

    // save the data to the db.json
    saveDatabase(data);

    //return a response with the deleted job object
    res.json({ message: "job deleted" });
  },
};

module.exports = jobController;
