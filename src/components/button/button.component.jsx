import React from "react";

const Button = ({ children }) => (
  <button className="w-[9rem] h-[3.75rem] flex justify-center items-center bg-[#BCA425] text-base text-white rounded-lg font-semibold">
    {children}
  </button>
);

export default Button;
