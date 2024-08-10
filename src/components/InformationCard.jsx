import React from "react";

export default function InformationCard({information}) {
    return (
        <div className={`box ${information.backgroundColor}`}>
            <img src={information.icon} alt={`${information.category} icon`}/>
            <p className={`sm:text-sm ${information.textColor} xxs:text-base pl-4`}>{information.category}</p>
            <p className="sm:text-sm text-secondary-darkGrayblue xxs:text-base ml-auto">{information.score}<span className="text-gray-400">/ 100</span></p>
          </div>
    )
}