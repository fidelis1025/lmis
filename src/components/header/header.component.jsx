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
      <Link>Home<span></span></Link>
      <Link>About Us<span></span></Link>
      <Link>Databases <span></span></Link>
      <Link>Indicators <span></span></Link>
      <Link>Publications & Reports <span></span></Link>
      <Link>News & Events <span></span></Link>
    </div>
  </div>
);

export default Header;
