import { generateId } from "../Utils/generateId.js";

export class House {
  constructor(obj) {
    this.footage = obj.footage
    this.bedrooms = obj.bedrooms
    this.bathrooms = obj.bathrooms
    this.price = obj.price
    this.address = obj.address
    this.id = generateId()
    this.imgUrl = obj.imgUrl
  }

  get Template() {
    return /*html*/ `
    <div class="col-6 col-md-3">
    <div class="bg-light rounded shadow p-2">
      <img class="img-fluid" src="https://photos.zillowstatic.com/fp/c6e010c5b38cb16126548a342b92608c-cc_ft_768.webp" alt="">
      <h5 class="text-center">${this.footage} SqFt | ${this.bedrooms} bed | ${this.bathrooms} bath</h5>
      <h4 class="text-center">$${this.price}</h4>
      <p>${this.address}</p>
      <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete"></i></button>
    </div>
  </div>
    `
  }
}