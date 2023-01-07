import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="w-[90rem] h-[5.875rem] bg-[#488134]">
    <div className="h-[60%] ">
      <Link to="/">
        <Logo />
      </Link>
    </div>

    <div>
      <Link className="" to="">
        Home<span></span>
      </Link>
      <Link className="" to="">
        About Us<span>&#x2EF;</span>
      </Link>
      <Link className="" to="">
        Databases <span>&#x2EF;</span>
      </Link>
      <Link className="" to="">
        Indicators <span>&#x2EF;</span>
      </Link>
      <Link className="" to="">
        Publications & Reports <span>&#x2EF;</span>
      </Link>
      <Link className="" to="">
        News & Events <span>&#x2EF;</span>
      </Link>
      <Link className="h-[2rem] w-[2rem] bg-[#FFFFFF] rounded-md" to="">
        <span>&#xFE0E;</span>
      </Link>
    </div>
  </div>
);

export default Header;
