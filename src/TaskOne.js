import React from 'react'
import { useState } from 'react'

function TaskOne() {

const [data, setData] = useState("");
const [changeval, setChange] = useState("");

const myvalueshow = () => {
    setChange(data);
  }
  return (
    <>
  <div className="tasks-container">
        <div className="container">
          <h1>First Task Here</h1>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">  {changeval } </label>

          </div>
          <div className="mb-3">
            <input type="text" name="mytext" onChange={(t) => setData(t.target.value)} />
          </div>
          <div className="mb-3">
            <button type="button" onClick={myvalueshow}  >Click here</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default TaskOne