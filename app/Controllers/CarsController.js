import { ProxyState } from "../AppState.js";
import { getCarForm } from "../Components/CarForm.js";
import { carsService } from "../Services/CarsService.js";

function _drawCars(){
  let cars = ProxyState.cars
  let template = ''
  cars.forEach(c => {
    template += c.Template
    // console.log(template);
  })
  document.getElementById('listings').innerHTML = template
}

export class CarsController{
  constructor(){
    console.log('cars controller loaded', ProxyState.cars);
    ProxyState.on('cars', _drawCars)
    this.getCars()
    this.viewCars() /*NOTE sets as default*/
  }

  // NOTE view cars handles drawing the cars and injecting the new car form
  viewCars(){
    let form = getCarForm()
    // console.log(form);
    document.getElementById('form-body').innerHTML = form
    _drawCars()
  }

  drawCreateForm() {
    console.log('draw create form cars'); 
    let form = getCarForm()
    document.getElementById('form-body').innerHTML = form
  }

  openEditForm(id) {
    let carObj = ProxyState.cars.find(c => c.id == id)
    console.log('edit form car', carObj); 
    
    let form = getCarForm(carObj)
    // console.log(form);
    document.getElementById('form-body').innerHTML = form
  }

  async getCars() {
    await carsService.getCars()
  }


  createCar(){

    window.event.preventDefault()
    let form = window.event.target
    console.log('create car submitted', form);

    let carData = {
      make : form.make.value,
      model : form.model.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value,
      color : form.color.value
    }
    console.log('the new car',carData);
    carsService.createCar(carData)
    form.reset()
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
  }

  async updateCar(id) {
    window.event.preventDefault()
    let form = window.event.target
    console.log('update car submitted', form);

    let carData = {
      make : form.make.value,
      model : form.model.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value,
      color : form.color.value
    }

    await carsService.updateCar(carData, id)
    form.reset()
    bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()

  }

  deleteCar(id){
    console.log('deleting car', id);
    carsService.deleteCar(id)
  }
}