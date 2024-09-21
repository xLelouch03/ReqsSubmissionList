import Requirement from "./Requirement.jsx";
import Button from "./Button.jsx";
import React, { useState } from 'react';

function Category() {
  const [requirement, setRequirement] = useState([<Requirement key={0} />]);

  const addRequirement = () => {
    const newIndex = requirement.length; 
    setRequirement([...requirement, <Requirement key={newIndex} />]); 
  };
  
  return (
    <>
      <div>
      <div className="mb-3 row">
        <label for="categoryName" class="col-sm-2 col-form-label">Category</label>
        <div className="col-sm-5">
          <input type="text" class="form-control" id="categoryName"/>
        </div>
      </div>

      <div className='reqContainer'>
        {requirement.map((requirement, index) => (
          <div className="mb-3 row" id="reqRow">
            <label className="col-sm-2 col-form-label" key={index}>Requirement</label>
            <div className="col-sm-7">
              {requirement}
            </div>
          </div>
        ))}
      </div>
        <div className="button-container">
          <Button style={{ marginTop: '20px' }} onClick={addRequirement}>
            Add Requirement 
          </Button>
        </div>
      </div>
    </>
  );
}

export default Category;
