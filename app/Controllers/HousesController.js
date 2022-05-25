import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";


function _drawHouses(){
  // get all the houses and build a template
  let template = ''
  ProxyState.houses.forEach(h => {template += h.Template})

  document.getElementById('listings').innerHTML = template
}


export class HousesController{
 constructor(){
   console.log('Houses controller loaded', ProxyState.houses);
   ProxyState.on('houses',_drawHouses)
 }

 viewHouses(){
  //  Get House Form and inject into modal body
  let form = getHouseForm()
  document.getElementById('form-body').innerHTML = form

  _drawHouses()
 }
 createHouse(){
  window.event.preventDefault()
  let form = window.event.target
  console.log('form submitted', form);
  // NOTE controller will collect all the information from the form...
  // NOTE the red underlines between form and value are ok
  let houseData = {
    footage : form.footage.value,
    bedrooms : form.bedrooms.value,
    bathrooms: form.bathrooms.value,
    price: form.price.value,
    address: form.address.value,
    imgUrl: form.imgUrl.value,
  }
  console.log('the new car',houseData);
  // ... and pass it to the service
  housesService.createHouse(houseData);
  form.reset()
  // NOTE don't look at boostrap docs they give a way that doesn't work as good look at this
  // it's best to close the modal here once the method is complete, closing it with the button click will not work later when things get more complicated
  bootstrap.Modal.getOrCreateInstance(document.getElementById('form-modal')).hide()
 }

 deleteHouse(id) {
   housesService.deleteHouse(id)
 }
}