import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const [changeval, setChange] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const myvalueshow =(event) => {
    setChange(false)
   // event.preventDefault();
  }
  return (
    <>


<div className="tasks-container">
        <div className="container">
        <h1>First Task Here</h1>
          <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
       {
      changeval ?
      <h2>{data}</h2>
      :null}
        </label>

          </div>
          <div className="mb-3">
            <input type="text" name="mytext"  onChange={(t) => setData(t.target.value)} />
          </div>
          <div className="mb-3">
            <button type="button" onClick={()=> setChange(true)}  >Click here</button>
          </div>
        </div>
      </div>

      <div className="tasks-container">
        <div className="container">
          <h1>Second Task Here</h1>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              <h2>{
              name
            }</h2></label>

          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="exampleFormControlInput1" 
              onChange={(e) => setName(e.target.value)} />
          </div>
         </div>
      </div>

    </>
  );
}

export default App;
