import React from "react";

import image1 from "../../images/unsplash_h5xEHzfepNk.png";
import SearchBar from "../search-bar/search-bar.component";

const SearchArea = () => (
  <div>
    <div
      className="w-full h-[39rem] bg-cover bg-center"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="w-full h-[39rem] bg-emerald-200/[0.25]">
        <div className="w-[40rem] h-[17rem] absolute top-[11.7rem] left-[23.5rem] flex flex-col justify-center">
          <h1 className="text-4xl text-neutral-50 text-center font-semibold">
            Welcome to Nigeria's Labour Market Information System</h1>
          <p className="text-2xl text-neutral-50 text-center font-light py-[2.5rem] mx-auto">
            We provide facts, studies and statistics
          </p>
          <SearchBar />
          {/* Still have to work on the search functionality */}
        </div>
      </div>
    </div>
  </div>
);

export default SearchArea;
