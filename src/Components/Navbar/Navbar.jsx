import React from "react"
import { useState } from "react"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
const Navbar=()=>{
  const [navigation,setnavigation]=useState(false);
  const [nav,setnav]=useState(false);
  function handleonnav(){
    setnavigation(!navigation);
  }
  function handleonnavi(){
    setnav(!nav);
  }
  return (
    <div className="text-[red] h-24 flex justify-between  items-center px-4 max-w-[1024px] mx-auto">
      <h1 className="text-[white] font-bold w-full text-3xl">Yark.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:cursor-pointer hover:text-white hover:underline-offset-2">Home</li>
        <li className="p-4 hover:cursor-pointer hover:text-white hover:underline-offset-2">Companies</li>
        <li className="p-4 hover:cursor-pointer hover:text-white hover:underline-offset-2">Products</li>
        <li className="p-4 hover:cursor-pointer hover:text-white hover:underline-offset-2">Contacts</li>
      </ul>
      <div onClick={handleonnav} className="block md:hidden">
        {!navigation?<AiOutlineMenu size={20} onClick={handleonnavi}/>:<AiOutlineClose size={20} onClick={handleonnavi}/>}
      </div>
      {nav &&
        <div className="react">
          <div className="w-full fixed left-0 m-3 h-full border-r border-r-gray-900 bg-[black] scale-x-[0.6] animate-spin ease-in-out duration-500">
           <ul className="bg-[black] p-4">
            <li className="p-4 mx-2  border-b border-r-blue-100 hover:cursor-pointer hover:text-white hover:underline-offset-2">Home</li>
            <li className="p-4 mx-2 border-b border-r-blue-100 hover:cursor-pointer hover:text-white hover:underline-offset-2">Companies</li>
            <li className="p-4 mx-2 border-b border-r-blue-100 hover:cursor-pointer hover:text-white hover:underline-offset-2">Products</li>
            <li className="p-4 mx-2 border-b border-r-blue-100 hover:cursor-pointer hover:text-white hover:underline-offset-2">Contacts</li>
           </ul>
        </div>
      </div>
      }
    </div>
  )
}

export default Navbar