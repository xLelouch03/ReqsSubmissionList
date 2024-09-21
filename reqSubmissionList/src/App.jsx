import React, { useState } from 'react';
import Category from './components/Category.jsx' 
import Button from "./components/Button.jsx";
import Requirement from './components/Requirement.jsx';

function App() {

  return (
    <>
      <div className='container'> 
        <div className='categorySection'> 
            <div className='categoryContainer'> 
                <Category/>
            </div>
            <Button style={{ marginTop: '20px' }}>Add Category</Button>
        </div>

        <div className='displaySection'>
          
          <Button>Export</Button>
        </div>
      </div>
    </>
  );
}

export default App
