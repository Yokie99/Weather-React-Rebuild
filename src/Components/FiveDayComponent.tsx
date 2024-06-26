import React from "react";
import upBlock from "../assets/up_arrow_block.png";
import downBlock from "../assets/down_arrow_block.png";
import sun from "../assets/sun.png";

const FiveDayComponent = () => {
  return (
    <>
      <div className="bg-white flex flex-col justify-center items-center border-black border-4 pt-10">
        <h1 className="text-4xl pb-5">Day of the week</h1>
        <img className="iconImage" src={sun} alt="" />


        <div className="flex align-middle items-center p-6 text-3xl">
          <div className="flex ">
            <img className="pe-4" src={upBlock} alt="" />
            <p>High:</p>
          </div>
          <p>69F</p>
          
        </div>
        <div className="flex align-middle items-center text-3xl pb-10">
          <div className="flex">
            <img className="pe-4" src={downBlock} alt="" />
            <p>Low:</p>
          </div>
          <p>69F</p>
          
        </div>
        
      </div>
    </>
  );
};

export default FiveDayComponent;
