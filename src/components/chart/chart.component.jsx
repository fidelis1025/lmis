import React from "react"

import image2 from "../../images/nigeria-unemployment-rate-2022-09-27.png";
import image3 from "../../images/Group.png";


const ChartItems = () => (
    <div className="w-full h-[10rem] flex space-x-8 mt-[15rem]">
        <div className="ml-[5.5rem]">
        <img className="w-[37rem] h-[22rem]" src={image2} alt="" />
        <p className="py-4 text-center text-sm text-[#1E5811]">Unemployment rate in Nigeria 1991-2022. Data source: World Bank, 2022</p>
        </div>

        <div>
        <img className="w-[24.3rem] h-[22rem]" src={image3} alt="" />
        <p className=" py-4 text-center text-sm text-[#1E5811]">Nigeria employment statistics by sector, 2021</p>
        </div>


    </div>
)

export default ChartItems