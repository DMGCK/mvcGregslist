import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

class JobsService{
  constructor() {

  }

  async getJobs() {

    const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/jobs');
    console.log('Get Jobs', res.data);
    ProxyState.jobs = res.data.map(j => new Job(j))
  }
  async createJob(jobData) {
    console.log(jobData); 
    
    const res = await axios.post('https://bcw-sandbox.herokuapp.com/api/jobs', jobData);
    console.log('Making new Job posting', res.data);
    
    ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
    // console.log(ProxyState.jobs)
  }

  async updateJob(jobData, id) {
    console.log(jobData, id); 
    
    const res = await axios.put('https://bcw-sandbox.herokuapp.com/api/jobs/' +id, jobData);
    // console.log('Updating car with new stuff', res.data);
    let jobIndex = ProxyState.jobs.findIndex(j => j.id == id);
    ProxyState.jobs.splice(jobIndex, 1, new Job(jobData));
    ProxyState.jobs = ProxyState.jobs
  }

  async deleteJob(id) {
    const res = await axios.delete('https://bcw-sandbox.herokuapp.com/api/jobs/' + id);
    console.log('deleting job', res.data);
    
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id != id)
    console.log(ProxyState.jobs); 
    
    ProxyState.jobs =ProxyState.jobs
  }
}

export const jobsService = new JobsService()