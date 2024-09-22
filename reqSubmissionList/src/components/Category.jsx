import Requirement from "./Requirement.jsx";
import Button from "./Button.jsx";

function Category({
  category,
  categoryIndex,
  onCategoryNameChange,
  onRequirementNameChange,
  addRequirement,
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
          <label className="col-sm-2 col-form-label">Category</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control border border-dark shadow-none"
              value={category.categoryName}
              onChange={handleCategoryNameChange}
              placeholder="Category Name"
            />
          </div>
        </div>

        <div className="reqContainer">
          {category.requirements.map((requirement, reqIndex) => (
            <Requirement
              key={reqIndex}
              reqIndex={reqIndex}
              requirement={requirement}
              onRequirementNameChange={handleRequirementNameChange}
            />
          ))}
        </div>
        <div className="button-container">
          <Button
            style={{
              marginTop: "20px",
              backgroundColor: "#4CAF50",
              border: "0px",
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
