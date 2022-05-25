import { generateId } from "../Utils/generateId.js";


export class Job{
  constructor(obj) {
    this.id = generateId()
    this.name = obj.name
    this.pay = obj.pay
    this.requirements = obj.requirements
    this.employer = obj.employer
    this.imgUrl = obj.imgUrl
  }

  get Template() {
    return /*html */`
    <div class=" col-6 col-md-3">
    <div class="rounded shadow p-2" ">
      <img class="img-fluid" src="${this.imgUrl == true ? this.imgUrl : 'https://jobflare-wordpress-public.s3.amazonaws.com/wp-content/uploads/2020/08/Computer-Programmer-Header-1536x864.png'}" alt="">
      <h5 class="text-center">${this.pay} | ${this.employer} </h5>
      <h4 class="text-center">${this.name}</h4>
      <p>${this.requirements}</p>
      <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')"><i class="mdi mdi-delete"></i></button>
    </div>
  </div>
    `
  }
}