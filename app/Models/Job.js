import { generateId } from "../Utils/generateId.js";


export class Job{
  constructor(obj) {
    this.id = obj.id 
    this.company = obj.company
    this.jobTitle = obj.jobTitle
    this.description = obj.description
    this.hours = obj.hours
    this.rate = obj.rate
    this.imgUrl = obj.imgUrl
  }

  get Template() {
    return /*html */`
    <div class=" col-6 col-md-3">
    <div class="rounded shadow p-2" ">
      <img class="img-fluid" src="${this.imgUrl == true ? this.imgUrl : 'https://jobflare-wordpress-public.s3.amazonaws.com/wp-content/uploads/2020/08/Computer-Programmer-Header-1536x864.png'}" alt="">
      <h5 class="text-center">${this.rate} | ${this.company} </h5>
      <h4 class="text-center">${this.jobTitle}</h4>
      <p>${this.description}</p>
      <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')"><i class="mdi mdi-delete"></i></button>
      <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#form-modal" onclick="app.jobsController.openEditForm('${this.id}')"><i class="mdi mdi-pencil"></i></button>
    </div>
  </div>
    `
  }
}