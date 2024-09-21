import React from 'react'

const Button = ({ children, style, onClick  }) => {
    return (
      <button type="button" className="btn btn-primary" style={style} onClick={onClick}>
        {children}
      </button>
    );
  };
export default Button