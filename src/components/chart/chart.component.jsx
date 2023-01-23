import React from "react"

import image2 from "../../images/nigeria-unemployment-rate-2022-09-27.png";
import image3 from "../../images/group.png";


const ChartItems = ()=> (
    <div className="w-full h-[10rem] flex space-x-4 mx-8">
        <div>

        <img src={image2} alt="" />
        <p></p>
        </div>
        <div>

        <img src={image3} alt="" />
        <p></p>
        </div>


    </div>
)

export default ChartItems