import React from 'react'
import { useState } from 'react'

function ClearText() {
    const [dataval, setVales] = useState();
    const [remove, setRemove] = useState();
    
    const Removespace = () =>  {
     let removespace = remove.replace(/ /g,'');
         setRemove(removespace);
    };
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


          <div className="tasks-container">
              <div className="container">
                  <h1>Remove White Space  </h1>
                  <div className="mb-3">    <label>{remove}</label></div>
                  <div className="mb-3">
                      <input type="text" className="form-control"
                          onChange={(e) => setRemove(e.target.value)} />
                  </div>
                  <div className="mb-3">
                      <button type="button"
                        className="btn btn-success"
                          title="Convert Text To Lower Case"
                          onClick={Removespace}
                          color="#606070"
                      >Click here</button>
                  </div>
                 <div className="space-footer"></div>
              </div>
          </div>
    </>
  )
}

export default ClearText