import React from 'react';
import '../Components/MyComponents.css';
import { useState, useEffect } from 'react';

function ThirdComponent(props) {
    const [InputValue2, setInputValue2] = useState(props.sendTOChild2);
    const [AddInputValue2, setAddInputValue2] = useState("");
    //console.log(props.sendTOChild2);

    const { sendTOChild2 } = props;

    // const Values = props.sendTOChild2;

    if (sendTOChild2 != AddInputValue2) {
        setInputValue2(sendTOChild2);
        setAddInputValue2(sendTOChild2);

    }


    function setValues(e) {
        setInputValue2(e.target.value);
        //  console.log(InputValue2);
    }

    function resetData() {
        setInputValue2("");
        props.parentCallback("");
    }
    function sendToParent() {
        props.parentCallback(InputValue2);

    }

    return (
        <>

            <div className="   col-4  justify-content-md-center">
                <h3>Third Component</h3>
                <div className="col-auto  py-3">
                    <label className="visually-hidden">Value Of First Component </label>
                    <input type="text" value={InputValue2} onChange={setValues} className="form-control" placeholder="Second Components" />
                </div>

                <div className="col-auto  py-1">
                    <button type="submit" onClick={sendToParent} className="btn btn-primary mb-2 ms-2">Submit</button>
                    <button type="submit" onClick={resetData} className="btn btn-primary mb-2 ms-2  ">Reset</button>
                </div>

            </div>

        </>
    )
}


export default ThirdComponent