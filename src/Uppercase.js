import React, { useState } from 'react';



export default function Uppercase() {
    const [myuppercase, setVale] = useState("");
    const [lowercase,setLower] = useState();

    const convertTextToUpperCase = () => {
        // To convert Upper Case
        let upperCaseText = myuppercase.toUpperCase();
        setVale(upperCaseText);
      };
    const convertTextLowercase = () => {
        let lowerCaseTxet = lowercase.toLowerCase();
        setLower(lowerCaseTxet);

    };


  return (
      <>
          <div className="tasks-container">
              <div className="container">
                  <h1>UpperCase Text button </h1>
                  <div className="mb-3">    <label>{myuppercase}</label></div>
                  <div className="mb-3">
                      <input type="text" className="form-control" 
                          onChange={(e) => setVale(e.target.value)} />
                  </div>
                  <div className="mb-3">
                      <button type="button"
                      className="btn btn-success"
                          title="Convert Text To Lower Case"
                          onClick={convertTextToUpperCase}
                          color="#606070"
                      >Click here</button>
                  </div>
              </div>
          </div>

          <div className="tasks-container">
              <div className="container">
                  <h1>LowerCase Text button </h1>
                  <div className="mb-3">    <label>{lowercase}</label></div>
                  <div className="mb-3">
                      <input type="text" className="form-control" 
                          onChange={(e) => setLower(e.target.value)} />
                  </div>
                  <div className="mb-3">
                      <button type="button"
                      className="btn btn-success"
                          title="Convert Text To Lower Case"
                          onClick={convertTextLowercase}
                          color="#606070"
                      >Click here</button>
                  </div>
              </div>
          </div>
          </>
  );
}
