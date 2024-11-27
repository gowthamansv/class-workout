const jobController = {
    getJob: (req,res)=>{
        const income = req.body.name || "";
        res.send(`Get request received ${income}`);
    },
    createJob: (req,res)=>{
        const income = req.body.name || "";
        res.send(`Post request received ${income}`);
    }
}

module.exports = jobController;