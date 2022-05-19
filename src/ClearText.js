import React from 'react'
import { useState } from 'react'

function ClearText() {
    const [dataval, setVales] = useState();

    
  return (
    <>
          <div className="tasks-container">
              <div className="container">
                  <h1>Count Input </h1>
                  <div className="mb-3">    <label>{dataval}</label></div>
                  <div className="mb-3">
                      <input type="text" className="form-control"
                          onChange={(e) => setVales(e.target.value.length)} />
                  </div>
                 <div className="space-footer"></div>
              </div>
          </div>
    </>
  )
}

export default ClearText