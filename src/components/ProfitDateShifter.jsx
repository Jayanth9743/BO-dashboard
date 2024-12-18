import { useState } from "react";


const buttonData = ["weekly","monthly","6-months","yearly", "Custom-Date"]

const ProfitDateShifter = () => {

  const [activeButton, setActiveButton] = useState("weekly");

  const handleActiveButton =(name)=>{
    setActiveButton(name);
  }

  return (
   <div className="flex items-center justify-center w-full mt-28">
     <div className="flex items-center justify-center rounded-3xl w-[95%] bg-[#D3E3FF]">
        {buttonData.map((name, index) =>(
            <button key={index} className={`py-2 px-2 my-1 text-sm rounded-2xl font-medium transition ${
              activeButton === name ? 'bg-white text-[#2E5392]' : ''
            }`} onClick={()=>handleActiveButton(name)}>{name}</button>
        )) }
    </div>
   </div>
  )
}

export default ProfitDateShifter
