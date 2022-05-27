import React from 'react';
import ThirdComponent from './ThirdComponent';
import { useState, useEffect } from 'react';



function SecondComponent({ changeval, sendvalue }) {
    const [changevals, setChange] = useState("");
    const [next, setnext] = useState("");
    console.log(changeval);
    //console.log(props.FirstCompChange);

  

    const secondCompSubmit = (e) => {
       console.log(changevals);
        
    }

    const secondReset = (e) => {
        e.preventDefault();
        changevals("");

    }

    useEffect(() => {
        console.log('chnagen in second option', changevals);
      
    }, [changevals]);

    useEffect(() => {
        setChange(changeval);
        setnext(changevals)
        console.log('chnagen in second option', changevals);
    }, [changeval]);
    return (
        <>


            <div className="  col-4 justify-content-md-center">

                <h3>Second Component</h3>
                <div className="col-auto  py-3">
                    <label className="visually-hidden">Value Of First Component   </label>
                    <input type="text" name="First" value={changevals} className="form-control" onChange={(e) => setChange(e.target.value)} placeholder="First Components" />
                </div>
                <div className="col-auto  py-1">
                    <button type="submit" onClick={(e)=>setnext(changevals)} className="btn btn-primary mb-2">Submit</button>
                    <button type="submit" onClick={secondReset} className="btn mb-2 ms-2 btn-primary ">Reset</button>
                </div>



            </div>


        </>
    );
}

export default SecondComponent