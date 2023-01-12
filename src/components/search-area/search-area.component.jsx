import React from "react";

import image1 from "../../images/unsplash_h5xEHzfepNk.png";

const SearchArea = () => (
  <div>
    <div
      className="w-full h-[39rem] bg-cover bg-center"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="w-full h-[39rem] bg-[rgba(72, 129, 52, 0.85)] relative">
        <h1 className="text-4xl font-semibold">Welcome to Nigeria's Labour Market Information System</h1>
        <p className="text-2xl font-light">We provide facts, studies and statistics</p>
      </div>
    </div>
  </div>
);

export default SearchArea;
