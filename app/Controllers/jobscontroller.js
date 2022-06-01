import { ProxyState } from "../AppState.js";
import { getJobForm } from "../Components/JobForm.js";
import { jobsService } from "../Services/jobsService.js";


function _drawJobs() {
  let template = ''
  console.log('draw jobs'); 
  ProxyState.jobs.forEach(j => {
    template += j.Template
  })
  document.getElementById('listings').innerHTML = template
}

export class JobsController {
  constructor() {
    console.log('Jobs startup'); 
    ProxyState.on('jobs', _drawJobs)
    // this.getJobs()
    
  }
  
  async getJobs() {
     await jobsService.getJobs()
   }
   
   viewJobs() {
     console.log('viewing jobs'); 
     this.getJobs()
     _drawJobs()

  }
  
  drawCreateForm() {
    let form = getJobForm()
    document.getElementById('form-body').innerHTML = form
  }

  async createJob() {
    window.event.preventDefault()
    console.log('creating job'); 

    let form = window.event.target

    // console.log(form); 
    
    let jobData = {
      id: form.id.value,
      company: form.company.value,
      rate: form.rate.value,
      hours: form.hours.value,
      jobTitle: form.jobTitle.value,
      description: form.description.value
    }

    // console.log('the new job', jobData); 

    jobsService.createJob(jobData)

    form.reset()
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
    
  }

  openEditForm(id) {
    let job = ProxyState.jobs.find(j => j.id == id)
    console.log('opening form', job); 
    let form = getJobForm(job)
    document.getElementById('form-body').innerHTML = form
    

  }

  async updateJob(id) {
    window.event.preventDefault()
    console.log('updating',id); 
    let form = window.event.target;
    let jobData = {
      id: id,
      company: form.company.value,
      rate: form.rate.value,
      hours: form.hours.value,
      jobTitle: form.jobTitle.value,
      description: form.description.value
    }
    console.log(jobData, jobData.id, 'controller'); 
    
    await jobsService.updateJob(jobData, id)
  }

   deleteJob(id) {
    jobsService.deleteJob(id)
  }
}