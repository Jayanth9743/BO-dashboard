import { useState } from "react";


const buttonData = ["weekly","monthly","6-months","yearly","custom-date"];

const ProfitDateShifter = () => {

  const [activeButton, setActiveButton] = useState("weekly");

  const handleActiveButton =(name)=>{
    setActiveButton(name);
  }

  return (
   <div className="flex items-center justify-center w-full mt-28 lg:justify-start">
     <div className="flex items-center lg:ml-[14rem] justify-around text-[#777777] xxs:w-[22rem] lg:gap-8 lg:w-[35rem] rounded-3xl xs:w-[24rem] bg-[#D3E3FF]">
        {buttonData.map((name, index) =>(
            <button key={index} className={`py-2 lg:px-3 px-2 my-1  xxs:text-[0.7rem] xs:text-sm rounded-3xl font-medium transition ${
              activeButton === name ? 'bg-white text-[#2E5392]' : ''
            }`} onClick={()=>handleActiveButton(name)}>{name}</button>
        )) }
        
        {/* still need to implement custom date */}

        {/* <input
          type="date"
          id="custom-date"
          name="custom-date"
          onClick={() => handleActiveButton("custom-date")}
          className={`py-2 px-2 my-1 xxs:text-[0.7rem] xs:text-sm cursor-pointer rounded-3xl font-medium transition ${
            activeButton === "custom-date" ? "bg-white text-[#2E5392]" : ""
          }`}
        /> */}
    </div>
   </div>
  )
}

export default ProfitDateShifter
