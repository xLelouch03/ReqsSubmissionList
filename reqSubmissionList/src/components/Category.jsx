import Requirement from "./Requirement.jsx";
import Button from "./Button.jsx";

function Category({
  category,
  categoryIndex,
  onCategoryNameChange,
  onRequirementNameChange,
  addRequirement,
  removeCategory,
  removeRequirement
}) {
  const handleCategoryNameChange = (event) => {
    onCategoryNameChange(categoryIndex, event.target.value);
  };

  const handleRequirementNameChange = (reqIndex, event) => {
    onRequirementNameChange(categoryIndex, reqIndex, event.target.value);
  };

  return (
    <>
      <div className="categoryContainer">
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"><strong>Category</strong></label>
          <div className="col-sm-5" style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              className="form-control border border-dark shadow-none"
              value={category.categoryName}
              onChange={handleCategoryNameChange}
              placeholder="Category Name"
            />
            <button
              onClick={() => removeCategory(categoryIndex)}
              className="remove-button" 
            >
              X
            </button>
          </div>
        </div>

        <div className="reqContainer">
          {category.requirements.map((requirement, reqIndex) => (
            <Requirement
              key={reqIndex}
              reqIndex={reqIndex}
              requirement={requirement}
              onRequirementNameChange={handleRequirementNameChange}
              removeRequirement={() => removeRequirement(categoryIndex, reqIndex)}
            />
          ))}
        </div>
        <div className="button-container">
          <Button
            style={{
              marginTop: "20px",
              backgroundColor: "#4CAF50",
              border: "0px",
              width: "25%"
            }}
            onClick={() => addRequirement(categoryIndex)}
          >
            Add Requirement
          </Button>
        </div>
      </div>
    </>
  );
}

export default Category;
