import React from "react";
import {ReactTyped} from "react-typed"; 
function Maincontent() {
  return (
    <div className="text-[white]">
        <div className="flex max-w-[800px] h-screen w-full left-[-20px] mx-auto flex-col text-center uppercase">
            <p className="font-bold p-4">Growing with Data Analytics</p>
            <h1 className="md:text-7xl sm:text-5xl text-4xl md:py-6">Grow with data</h1>
            <p className="md:text-6xl sm:text-4xl text-3xl">You are looking</p>
            <p className="mt-5 text-2xl">Fast,flexible and financing <ReactTyped strings={["BTB","SASS","BTC"]} backSpeed={50} typeSpeed={50} loop/></p>
            <p className="opacity-[0.5] sm:text-3xl mt-[4rem]">Monitor your data analytics to increase revenue for BTB,BTC, & SASS platforms.</p>
            <button type="submit" className="color-[black] border-r border rounded-md bg-green-400 w-[180px] text-2xl mx-auto mt-[20px] px-3">Get Started</button>
        </div>
    </div>
  )
}

export default Maincontent