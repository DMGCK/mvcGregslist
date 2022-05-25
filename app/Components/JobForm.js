export function getJobForm() {
  return /*html */`      
  <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.jobsController.createJob()">
  <h3> List a Job </h3>
    <div class="row">
      <div class="col-3 mb-2">
        <label for="" class="form-label">Job Name</label>
        <input required type="text" name="name" id="name" placeholder="" maxlength="50"
          minlength="3" class="form-control" aria-describedby="helpId"
          title="Job name">
      </div>
      <div class="col-3 mb-2">
        <label for="" class="form-label">Pay</label>
        <input required type="number" name="pay" id="pay" placeholder="Pay"
          class="form-control" aria-describedby="helpId">
      </div>
      <div class="col-3 mb-2">
        <label for="" class="form-label">Employer</label>
        <input required type="text" name="employer" id="employer"placeholder="Employer name" maxlength='50'
          class="form-control" aria-describedby="helpId">
      </div>
      <div class="col-12 mb-2">
        <label for="" class="form-label">Requirements</label>
        <input required type="text" name="requirements" id="requirements"
          placeholder="Job Requirements" class="form-control" maxlength="300"
          aria-describedby="helpId">
      </div>
      <div class="col-6">
        <label for="" class="form-label">Image Url</label>
        <input required type="text" name="imgUrl" id="imgUrl" class="form-control"
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