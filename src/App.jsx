import React from "react";

import data from "./data/data.json";
import InformationCard from "./components/InformationCard";

export default function App() {
  return (
    <div>
      <div className="sm:flex flex-row xxs:grid grid-cols-1 xxs:h-screen max-w-fit sm:h-fit mx-auto bg-white sm:shadow-xl sm:rounded-3xl">
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-gradients-lightSlateblue to-gradients-lightRoyalblue sm:rounded-3xl sm:max-w-80 xxs:rounded-b-3xl">
          <h1 className="text-lg pt-9 pb-8 text-secondary-lightLavender font-bold">Your Result</h1>
          <div className="bg-gradient-to-b from-gradients-violetBlue/100 to-gradients-persianBlue/0 w-36 h-36 rounded-full flex flex-col justify-center items-center mb-8">
            <p className="text-6xl text-secondary-paleBlue font-bold">76</p>
            <p className="text-sm text-secondary-lightLavender font-medium">of 100</p>
          </div>
          <p className="text-2xl text-secondary-paleBlue">Great</p>
          <div className="mx-12 mt-4 xxs:w-lg sm:w-52">
            <p className="xxs:text-base sm:text-sm mb-12 text-center text-secondary-lightLavender">You scored higher than 65% of the people who have taken these tests.</p>
          </div>
        </div>
        <div className="sm:flex flex-col text-left px-8 rounded-r-3xl xxs:grid grid-cols-1">
          <h1 className="pt-9 pb-8 text-lg text-secondary-darkGrayblue font-bold">Summary</h1>

          {data.map(information => (
            <InformationCard information={information}/>
          )
          )}
          <div className="mt-9">
            <a className="btn" href="#">Continue</a>
          </div>
        </div>
      </div>
    </div>
  );
}
