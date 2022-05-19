import React, { useState } from 'react';





export default function Lowercase() {
    const [myval, setMyVal] = useState();
  return (
  
  <>
    
          <div className="tasks-container">
              <div className="container">
                  <h1>Clear Text button </h1>
                  <div className="mb-3">
                      <input type="text" value={myval} />
                  </div>
                  <div className="mb-3">
                      <button onClick={() => setMyVal(() => "")}>Reset</button>
                  </div>
              </div>
          </div>
  </>
  );
}
