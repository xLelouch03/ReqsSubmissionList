import React from 'react'

const Button = ({ children, style }) => {
    return (
      <button type="button" className="btn btn-primary" style={style}>
        {children}
      </button>
    );
  };
export default Button