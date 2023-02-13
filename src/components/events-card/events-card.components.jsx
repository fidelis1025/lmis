import React from "react"

const UpcomingEvents = ({image, title, date, state}) => (
    <div>
        <div className="w-64 h-60 drop-shadow-xl bg-center bg-cover" style={{backgroundImage: `url(${image})`}}>
        <div className="w-24 h-8 rounded-t-lg flex justify-center item-center absolute top-52 left-44 bg-[#FFFFFF]">{date}</div> 
        </div>

        <div className="font-semibold text-base text-[#373737]">{title}</div>

        <div className="flex space-x-4 justify-center item-center">
           <div className="flex justify-center items-center">
            <span className="text-red-500"></span>
            <p className="font-normal text-[#373737] text-base">{state}</p>
            </div> 
           <div>
            <p className="text-[#1E5811] font-normal text-base">view more</p>
            </div> 
        </div>
    </div>
) 

export default UpcomingEvents 