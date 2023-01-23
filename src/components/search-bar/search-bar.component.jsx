import React from "react";

const SearchBar = () => (
  <div className="text-center">
    <input
      className="w-[30rem] h-[3.2rem] px-4 rounded-l-lg placeholder:text-xs placeholder:px-7 focus:outline-none"
      type="search"
      placeholder="Input keyword here to search our database eg. employment, industry"
    />
    <button className="w-[7.25rem] h-[3.2rem] bg-[#BCA425] text-neutral-50 rounded-r-lg">
      Search
    </button>
  </div>
);

export default SearchBar;
