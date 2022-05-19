import React from 'react';
//import { useState } from "react";


 function Exerciseone() {
    //const [change, setChange] = useState(null);

   
    return (

        <>
            <div className="tasks-container">
                <div className="container">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">text ddata</label>

                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"  />
                    </div>
                    <div className="mb-3">
                    <button type="button"   >Click here</button>
                    </div>
                </div>
            </div>
        
        </>

    );
    }


// function handleChange(val){
//     setText(val.target.val);
// console.log('it works now');

// }
export default Exerciseone;
