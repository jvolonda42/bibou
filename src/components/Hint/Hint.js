import React from 'react';

function Hint({ hints }) {
  
  return (
    <div>
      {
        hints.map((hint, index) => { return <div key={index}>{hint.hint}</div> })
      }
    </div>
  )
};

export default Hint;
