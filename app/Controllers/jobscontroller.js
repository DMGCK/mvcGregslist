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
  }

  viewJobs() {
    console.log('viewing jobs'); 
    _drawJobs()
    let form = getJobForm()
    document.getElementById('form-body').innerHTML = form

  }

  createJob() {
    window.event.preventDefault()
    console.log('creating job'); 

    let form = window.event.target

    // console.log(form); 
    
    let jobData = {
      name: form.name.value,
      pay: form.pay.value,
      requirements: form.requirements.value,
      employer: form.employer.value,
      imgUrl: form.imgUrl.value
    }

    // console.log('the new job', jobData); 

    jobsService.createJob(jobData)

    form.reset()
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
    
  }

  deleteJob(id) {
    jobsService.deleteJob(id)
  }
}