import { useState } from 'react'

import './App.css'
import { UseStateBasics } from './components/p1';
// import { UpdatingObjectsArraysState } from './components/p2';
// import { EventHandlingState } from './components/p3';
import { DerivedStateCondRender } from './components/p4';

function App() {
  return(
    <>
    <UseStateBasics/>
    {/* <UpdatingObjectsArraysState/>
     <EventHandlingState/> */}
     <DerivedStateCondRender/> 
    </>
  )
}
  
  

export default App;