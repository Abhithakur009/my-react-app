import React from 'react'
import '../Components/MyComponents.css';
import { useState, useEffect, useCallback } from 'react';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';


export default function FirstComponent(props) {
    // const [firstComp, setFirFastack] = useState();
    const [firstComp, setFirFastack] = useState();
    const [FirstCh, setFirstCh] = useState("");
    const [secondComp, setSecond] = useState("");
    const [SecondCh, setSecondCh] = useState("");

    function getSeconddta(changevals) {
        setFirFastack(changevals);
        // console.log(changevals);
    }

    function getSeconddta2(InputValue2) {
        setSecond(InputValue2);

    }

    function sendTOChild1() {
        setFirstCh(firstComp);
    }
    function sendTOChild2() {
        setSecondCh(secondComp);
    }

    function sendData() {
        setFirstCh(firstComp);
        setSecondCh(secondComp);
    }




    return (
        <>

            <div className="container first-container">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-3">
                    </div>
                    <div className="col-4 py-3">
                        <h2>First Component</h2>
                        <div className="col-auto  py-3">
                            <label className="visually-hidden">Value Of First Component  </label>
                            <input type="text" name="First" value={firstComp} onChange={(e) => setFirFastack(e.target.value)} className="form-control" id="firstComp" placeholder="First Components" />
                        </div>
                        <div className="col-auto  py-2">
                            <label className="visually-hidden">Password</label>
                            <input type="text" name="Second" value={secondComp} onChange={(e) => setSecond(e.target.value)} className="form-control" placeholder="Second Components" />
                        </div>
                        <div className="col-auto  py-1">
                            <button type="submit" onClick={sendData} className="btn btn-primary mb-3">Submit</button>
                        </div>
                    </div>
                    <div className="col col-lg-3">
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <SecondComponent parentCallback={getSeconddta} sendTOChild={FirstCh} />
                    <ThirdComponent parentCallback={getSeconddta2} sendTOChild2={SecondCh} />
                </div>

            </div>

        </>
    )
}


