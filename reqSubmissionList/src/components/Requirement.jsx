import React from 'react';

function Requirement({ requirement, reqIndex, onRequirementNameChange }) {
    return (
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Requirement</label>
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control border border-dark shadow-none"
              value={requirement}
              onChange={(event) => onRequirementNameChange(reqIndex, event)}
              placeholder="Requirement Name"
            />
          </div>
      </div>
    );
}

export default Requirement;
