import React from "react";

const Box = ({value, description}) => (
  <div>
    <div className="w-[8rem] h-[5.8rem] bg-neutral-50 drop-shadow-lg mx-[2.6rem] rounded-lg flex items-center justify-center">
      <p className="text-[#0E2B90] text-xl px-auto py-auto">{value}</p>
    </div>
    <p className="mx-[2.6rem] my-4 text-center text-sm text-[#1E5811]">{description}</p>
  </div>
);

export default Box;
