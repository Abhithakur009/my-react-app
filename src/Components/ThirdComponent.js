import React from 'react';
import '../Components/MyComponents.css';

function ThirdComponent() {

    return (
        <>
       
       <div className="row   col-6  justify-content-md-center">
                <h3>Third Component</h3>
                <div className="col-auto  py-3">
                    <label className="visually-hidden">Value Of First Component </label>
                    <input type="text" className="form-control" placeholder="First Components" />
                </div>
               
                <div className="col-auto  py-1">
                    <button type="submit" className="btn btn-primary mb-2 ms-2">Submit</button>
                    <button  type="submit" className="btn btn-primary mb-2 ms-2  ">Reset</button>
                </div>
                
            </div>
        
        </>
    )
}


export default ThirdComponent