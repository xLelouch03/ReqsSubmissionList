import React, { useState } from "react";
import Category from "./components/Category.jsx";
import Button from "./components/Button.jsx";

function App() {
  const [categories, setCategories] = useState([
    { categoryName: "", requirements: [""] },
  ]);

  const addCategory = () => {
    setCategories([...categories, { categoryName: "", requirements: [""] }]);
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

  const printJSON = () => {
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
            />
          ))}
          <Button
            style={{
              marginTop: "20px",
              backgroundColor: "#4CAF50",
              border: "0px",
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
