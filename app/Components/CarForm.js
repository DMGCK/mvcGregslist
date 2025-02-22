export function getCarForm(car ={}){
  console.log(car, 'form'); 
  
  return /*html*/`
  
  <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.carsController.${car.id ? `updateCar('${car.id}')` : `createCar()`}">
              <h3> ${car.id ? 'Edit '+ car.make + ' ' + car.model : 'List a Car'} </h3>
                <div class="row">
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Make</label>
                    <input required type="text" name="make" id="make" placeholder="Enter a car Make..." maxlength="15"
                      minlength="3" class="form-control" placeholder="" aria-describedby="helpId" value="${car.id ? car.make : ''}"
                      title="please enter a model">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Model</label>
                    <input required type="text" name="model" id="model" placeholder="Enter a car Model..." value="${car.id ? car.model : ''}"
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Year</label>
                    <input required type="number" name="year" id="year" value="2000" min="1960" max="2023" value="${car.id ? car.year : ''}"
                      class="form-control" placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-3 mb-2">
                    <label for="" class="form-label">Price</label>
                    <input required type="number" name="price" id="price" value="1" min="1" class="form-control" value="${car.id ? car.price : ''}"
                      placeholder="" aria-describedby="helpId">
                  </div>
                  <div class="col-12 mb-2">
                    <label for="" class="form-label">description</label>
                    <input required type="text" name="description" id="description"
                      placeholder="Tell us about the car..." class="form-control" maxlength="75" placeholder="" value="${car.id ? car.description : ''}"
                      aria-describedby="helpId">
                  </div>
                  <div class="col-6">
                    <label for="" class="form-label">Image Url</label>
                    <input required type="text" name="imgUrl" id="imgUrl" class="form-control" placeholder="" value="${car.id ? car.imgUrl : ''}"
                      aria-describedby="helpId">
                  </div>
                  <div class="col-6">
                    <label for="" class="form-label">Color</label>
                    <input required type="color" name="color" id="color" class="form-control" placeholder="" value="${car.id ? car.color : ''}"
                      aria-describedby="helpId">
                  </div>
                </div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                ${car.id ? `<button type="submit" class="btn btn-info px-3 py-2" title="create a car"><i
                class="mdi mdi-plus"></i>
              Save</button>` : 
              `<button type="submit" class="btn btn-primary px-3 py-2" title="create a car"><i
              class="mdi mdi-plus"></i>
            Create</button>`}
              </form>`
}