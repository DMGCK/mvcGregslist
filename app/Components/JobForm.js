export function getJobForm(job = {}) {
  return `      
  <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.jobsController.${job.id ? `updateJob('${job.id}')` :'createJob()'}">
  <h3> ${job.id ? 'Update ' + job.jobTitle : 'List  a Job' } </h3>
    <div class="row">

      <div class="col-3 mb-2">
        <label for="" class="form-label">Job Name</label>
        <input required type="text" name="jobTitle" id="jobTitle" value="${job.id ? job.jobTitle : ''}" maxlength="50"
          minlength="3" class="form-control" aria-describedby="helpId"
          title="Job name">
      </div>

      <div class="col-3 mb-2">
        <label for="" class="form-label">Pay</label>
        <input required type="number" name="rate" id="rate" placeholder="Pay" value="${job.id ? job.rate : ''}"
          class="form-control" aria-describedby="helpId">
      </div>

      <div class="col-3 mb-2">
        <label for="" class="form-label">Employer</label>
        <input required type="text" name="company" id="company"placeholder="Employer name" maxlength='50' value="${job.id ? job.company : ''}"
          class="form-control" aria-describedby="helpId">
      </div>

      <div class="col-12 mb-2">
        <label for="" class="form-label">Description</label>
        <input required type="text" name="description" id="description" value="${job.id ? job.description : ''}"
          placeholder="Job Requirements" class="form-control" maxlength="300"
          aria-describedby="helpId">
      </div>

      <div class="col-6">
        <label for="" class="form-label">Hours</label>
        <input required type="number" name="hours" id="hours" class="form-control" value="${job.id ? job.hours : ''}"
          aria-describedby="helpId">
      </div>

    </div>
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    ${job.id ? `<button type="submit" class="btn btn-warning px-3 py-2" title="create a job"><i
    class="mdi mdi-pencil"></i>
  Save</button>` : 
    `<button type="submit" class="btn btn-primary px-3 py-2" title="create a job"><i
    class="mdi mdi-plus"></i>
  Create</button>`}
  </form>
  `
}