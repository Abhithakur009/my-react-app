import React from 'react'
import '../Components/MyComponents.css';
import { useState, useEffect, useCallback } from 'react';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';


    export default function FirstComponent(props) {
    // const [firstComp, setFirFastack] = useState();
    const [firstComp,setFirFastack]=useState(); 
    const [changeval, setChange] = useState("");
    const [secondComp, setSecond] = useState("");
    const [valuchange, setCallback] = useState("");

    const callback = useCallback((valuchange) => {
        setCallback(valuchange);
      }, []);


    function FirstCompChange(e) {
      
        setChange(firstComp)
    }
    

    useEffect(() => {    
        console.log("working on the", firstComp);
        console.log(props);
        console.log(props.next);
       
      }, [firstComp]);

      useEffect(() => {
        console.log("working on the", secondComp);
        console.log(props);
      }, [secondComp]);


   
    //   const addDataInFirst = (firstComp, secondComp) => {
    //     console.log("here is sending data to Comp", firstComp, secondComp);
    //     let mytest = firstComp;
       
    //     setChanges(mytest)
    
       
    //   }
    return (
        <>

            <div className="container first-container">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-3">
                    </div>
                    <div className="col-4 py-3">
                        <h2>First Component</h2>
                        <div className="col-auto  py-3">
                            <label className="visually-hidden">Value Of First Component {changeval} </label>
                            <input type="text"  name="First"   onChange={(e)=>setFirFastack(e.target.value)} className="form-control" id="firstComp" placeholder="First Components" />
                        </div>
                        <div className="col-auto  py-2">
                            <label className="visually-hidden">Password</label>
                            <input type="text" name="Second"  onChange={(e)=>setSecond(e.target.value)} className="form-control" id="changeval" placeholder="Second Components" />
                        </div>
                        <div className="col-auto  py-1">
                            <button type="submit" onClick={FirstCompChange} className="btn btn-primary mb-3">Submit</button>
                        </div>
                    </div>
                    <div className="col col-lg-3">
                    </div>
                </div>
                <div className="row justify-content-md-center">       
                <SecondComponent  parentCallback={callback}  changeval={changeval}  FirstCompChange={FirstCompChange} />
                <ThirdComponent />
                </div>

            </div>

        </>
    )
}


