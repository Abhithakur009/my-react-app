import React from 'react';
import ThirdComponent from './ThirdComponent';
import { useState, useEffect } from 'react';



function SecondComponent(props) {
    const [changevals, setChange] = useState(props.sendTOChild);
    const [next, setnext] = useState("");
    // console.log(props.sendTOChild);


    const { sendTOChild } = props;
    const Values = props.sendTOChild;
    if (Values != next) {
        setChange(sendTOChild);
        setnext(sendTOChild);
    }
    //const data = "test data";

    const secondReset = () => {
        setChange("");
        props.parentCallback("");

    }

    function childToPar() {
        props.parentCallback(changevals);
    }




    return (
        <>


            <div className="  col-4 justify-content-md-center">

                <h3>Second Component</h3>
                <div className="col-auto  py-3">
                    <label className="visually-hidden">Value Of First Component   </label>
                    <input type="text" name="First" value={changevals} className="form-control" onChange={(e) => setChange(e.target.value)} placeholder="First Components" />
                </div>
                <div className="col-auto  py-1">
                    <button type="submit" onClick={childToPar} className="btn btn-primary mb-2">Submit</button>
                    <button type="submit" onClick={secondReset} className="btn mb-2 ms-2 btn-primary ">Reset</button>
                </div>



            </div>


        </>
    );
}

export default SecondComponent