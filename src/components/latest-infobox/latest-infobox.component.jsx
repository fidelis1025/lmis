import React from "react";

import Button from "../button/button.component";


const LatestInfobox = ({heading, description, image, background,flex}) => (
  <div className={`w-full h-[28rem] flex flex-${flex} space-x-8 bg-${background}`}>
    <div className="mx-[5.5rem] mt-[4.75rem]">
      <div className="w-[27.5rem] h-[19rem] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        <div className="w-[27.5rem] h-[19rem] bg-[#1e581166]"/>
      </div>
    </div>

    <div className="flex flex-col space-y-8 mt-[4.75rem]">
      <h2 className="font-semibold text-4xl text-[#0E2B90]">{heading}</h2>
      <p className="text-lg text-[#121212] font-normal">{description}</p>
      <Button>Read More</Button>
    </div>
  </div>
);

export default LatestInfobox;
