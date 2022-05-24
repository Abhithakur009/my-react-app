import React from 'react'
import { useState } from 'react'

function TaskTwo() {
    const [name, setName] = useState("");
    return (
        <>
            <div className="tasks-container">
                <div className="container">
                    <h1>Second Task Here</h1>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">
                            <h2>{name}</h2></label>

                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskTwo