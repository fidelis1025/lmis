import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const GreenHeader = () => (
  <div className=" flex w-full h-[5.875rem] text-base text-neutral-50 bg-[#478033]">
    <div className="flex justify-center items-center ml-14">
      <Link to="/">
        <Logo className=""/>
      </Link>
    </div>

    <div className="flex justify-center items-center ml-12">

      <Link to="">
       <p className="hover:border-b mr-14" >Home</p> 
      </Link>
      <Link className="flex space-x-2" to="">
      <p className="hover:border-b mr-14">About Us</p> 
      </Link>
      <Link className="flex space-x-1" to="">
      <p className="hover:border-b mr-14">Databases</p>  
      </Link>
      <Link className="flex space-x-1" to="">
      <p className="hover:border-b mr-14">Indicators</p>  
      </Link>
      <Link className="flex space-x-1" to="">
      <p className="hover:border-b mr-14"> Publications & Reports</p>  
      </Link>
      <Link className="flex space-x-1" to="">
      <p className="hover:border-b mr-14">News & Events</p>  
      </Link>
      <Link className="h-[2rem] w-[2rem] border border-black bg-neutral-50 rounded-md" to="">
        <span className="">&#xFE0E;</span>
      </Link>

    </div>
  </div>
);

export default GreenHeader;
