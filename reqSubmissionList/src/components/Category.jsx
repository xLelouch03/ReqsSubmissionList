import Requirement from "./Requirement.jsx";
import Button from "./Button.jsx";

function Category() {
  return (
    <>
      <div>
      <div className="mb-3 row">
        <label for="categoryName" class="col-sm-4 col-form-label">Category</label>
        <div className="col-sm-7">
          <input type="text" class="form-control" id="categoryName"/>
        </div>
      </div>

        <div className='reqContainer'>
          <div>
            Requirement  <input type="text" placeholder="Requirement Name" />
          </div>
          <Button style={{ marginTop: '10px' }}>Add Requirement</Button>
        </div>
      </div>
    </>
  );
}

export default Category;
