import React, { useState } from "react";
import Category from "./components/Category.jsx";
import Button from "./components/Button.jsx";

function App() {
  const [categories, setCategories] = useState([]);


  const addCategory = () => {
    setCategories([...categories, { categoryName: "", requirements: [] }]);
  };

  const addRequirement = (categoryIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].requirements.push("");
    setCategories(updatedCategories);
  };

  const handleCategoryNameChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index].categoryName = value;
    setCategories(updatedCategories);
  };

  const handleRequirementNameChange = (categoryIndex, reqIndex, value) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].requirements[reqIndex] = value;
    setCategories(updatedCategories);
  };

  const removeCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  const removeRequirement = (categoryIndex, reqIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].requirements = updatedCategories[categoryIndex].requirements.filter((_, i) => i !== reqIndex);
    setCategories(updatedCategories);
  };

  const printJSON = () => {
    const isEmpty = categories.length === 0 || categories.every(category => 
      !category.categoryName || category.requirements.length === 0
    );
  
    if (isEmpty) {
      alert("There are no categories or requirements to print.");
      return;
    }

    const hasEmptyCategoryNames = categories.some(category => 
      !category.categoryName || category.categoryName.trim() === ""
    );

    const hasEmptyRequirements = categories.some(category => 
      category.requirements.some(req => !req || req.trim() === "")
    );
  
    if (hasEmptyRequirements) {
      alert("A requirement cannot be null or empty.");
      return; 
    }

    else if (hasEmptyCategoryNames) {
      alert("A category name cannot be null or empty.");
      return;
    }
  
    console.log(JSON.stringify(categories, null, 2));
  };
  

  return (
    <>
      <div className="container">
        <div className="categorySection">
          {categories.map((category, index) => (
            <Category
              key={index}
              category={category}
              categoryIndex={index}
              onCategoryNameChange={handleCategoryNameChange}
              onRequirementNameChange={handleRequirementNameChange}
              addRequirement={addRequirement}
              removeCategory={removeCategory} 
              removeRequirement={removeRequirement}
            />
          ))}
          <Button
            style={{
              marginTop: "20px",
              backgroundColor: "#4CAF50",
              border: "0px",
              width: "25%",
            }}
            onClick={addCategory}
          >
            Add Category
          </Button>
        </div>

        <div className="displaySection">
          <div className="requirementList">
            {categories.map((category, index) => (
              <div key={index} style={{ marginTop: "20px" }}>
                <strong>{category.categoryName || ""}</strong>
                {category.requirements.map((requirement, reqIndex) => (
                  <div key={reqIndex} style={{ paddingLeft: "40px" }}>
                    {requirement || ""}
                  </div>
                ))}
              </div>
            ))}
            <div className="button-container">
              <Button
                onClick={printJSON}
                style={{
                  marginTop: "30px",
                  backgroundColor: "#4CAF50",
                  border: "0px",
                }}
              >
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
