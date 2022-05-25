import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

class JobsService{
  constructor() {

  }
  createJob(jobData) {
    console.log(jobData); 
    
    ProxyState.jobs = [...ProxyState.jobs, new Job(jobData)]

    console.log(ProxyState.jobs)
  }

  deleteJob(id) {
    ProxyState.jobs = ProxyState.jobs.filter(j => {j.id != id})
  }
}

export const jobsService = new JobsService()