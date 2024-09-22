import React from "react";

function Requirement({ requirement, reqIndex, onRequirementNameChange, removeRequirement }) {
  return (
    <div className="mb-3">
      <div className="border border-dark rounded p-3">
        <div className="row align-items-center">
          <label className="col-sm-2 col-form-label reqField">
            <strong>Requirement</strong>
          </label>
          <div className="col-sm-8 input-container" style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              className="form-control border border-dark shadow-none"
              value={requirement}
              onChange={(event) => onRequirementNameChange(reqIndex, event)}
              placeholder="Requirement Name"
            />
            <button
              onClick={removeRequirement}
              className="remove-button" 
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requirement;