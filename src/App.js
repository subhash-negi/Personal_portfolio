import React from "react";
import RoundedOne from "./components/RoundedDesigns/Rounded1";
import ROundedTwo from "./components/RoundedDesigns/ROundedTwo";
import RoundedFour from "./components/RoundedDesigns/RoundedFour";
import RoundedThree from "./components/RoundedDesigns/RoundedThree";
import RoundedFive from "./components/RoundedDesigns/RoundedFive";
import Home from "./Home";



function App() {
  return (
    <div className="w-full h-screen font-bodyfont text-textColor bg-black relative overflow-hidden">
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home/>
      </div>
        <div className='w-full h-full absolute top-0 left-0 z-10'>  
         <RoundedOne/>
         <ROundedTwo/>
         <RoundedThree/>
         <RoundedFour/>
         <RoundedFive/>
         
        </div>
     
    </div>
  );
}

export default App;
