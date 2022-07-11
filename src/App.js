import './App.css';
import React from 'react';
import FirstComponent from './Components/FirstComponent';
import SecondComponent from './Components/SecondComponent';
import { useState } from 'react';
import ThirdComponent from './Components/ThirdComponent';
import ParentData from './Components/ParentData';
import NestedMain from './Components/NestedMain';

function App() {
 

  // const sendSeconddata =()=> {
  //  console.log("here is sending data to Comp", changevals);
  // }

  // const FirstCOmp = (getInfo) => {

  //  let mytest =  setChanges(getInfo.First);
  // console.log('send value in second', mytest);
  // }
  return (

    <>
      <NestedMain  />
     

    </>


  );
}

export default App;
