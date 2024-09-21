import React, { useState } from 'react';
import Category from './components/Category.jsx';
import Button from "./components/Button.jsx";

function App() {
  const [categories, setCategories] = useState([<Category key={0} />]);

  const addCategory = () => {
    const newIndex = categories.length; 
    setCategories([...categories, <Category key={newIndex} />]); 
  };

  return (
    <>
      <div className='container'> 
        <div className='categorySection'> 
          {categories.map((category, index) => (
            <div className='categoryContainer' key={index}>
              {category}
            </div>
          ))}
          <Button style={{ marginTop: '20px' }} onClick={addCategory}>
            Add Category
          </Button>
        </div>

        <div className='displaySection'>
          <Button>Export</Button>
        </div>
      </div>
    </>
  );
}

export default App;
