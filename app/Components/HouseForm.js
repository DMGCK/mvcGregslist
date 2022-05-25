export function getHouseForm() {
  return /*html */`      
  <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.housesController.createHouse()">
  <h3> List a House </h3>
    <div class="row">
      <div class="col-3 mb-2">
        <label for="" class="form-label">Square Footage</label>
        <input required type="number" name="footage" id="footage" placeholder="Enter the square footage..." maxlength="15"
          minlength="3" class="form-control" aria-describedby="helpId" max="100000"
          title="please enter a model">
      </div>
      <div class="col-3 mb-2">
        <label for="" class="form-label">Bedrooms</label>
        <input required type="number" name="bedrooms" id="bedrooms" placeholder="Amount of bedrooms"
          class="form-control" aria-describedby="helpId">
      </div>
      <div class="col-3 mb-2">
        <label for="" class="form-label">Bathrooms</label>
        <input required type="number" name="bathrooms" id="bathrooms"placeholder="Amount of bathrooms" min="0" max="50"
          class="form-control" aria-describedby="helpId">
      </div>
      <div class="col-3 mb-2">
        <label for="" class="form-label">Price</label>
        <input required type="number" name="price" id="price" class="form-control"
         aria-describedby="helpId">
      </div>
      <div class="col-12 mb-2">
        <label for="" class="form-label">Address</label>
        <input required type="text" name="address" id="address"
          placeholder="Street Address" class="form-control" maxlength="100"
          aria-describedby="helpId">
      </div>
      <div class="col-6">
        <label for="" class="form-label">Image Url</label>
        <input required type="text" name="imgUrl" id="imgUrl" class="form-control"
          aria-describedby="helpId">
      </div>
      <div class="col-6">
        <label for="" class="form-label">Realtor</label>
        <input  type="text" name="color" id="color" class="form-control"
          aria-describedby="helpId">
      </div>
    </div>
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary px-3 py-2" title="create a car"><i
        class="mdi mdi-plus"></i>
      Create</button>
  </form>
  `
}