import { useState } from "react";

//func's will be added to set the api call in future
const ItemsButtons = () => {
    const buttonItems = ["All Items","Boiler","Layer","Parent","others"];
    const [activeButton, setActiveButton] = useState("All Items");
    
      const handleActiveButton =(name)=>{
        setActiveButton(name);
      }
  return (
    <div className="flex items-center justify-center w-full mt-28 lg:mt-24">
      <div className='hidden w-48 lg:block'></div>
      <div className="flex items-center justify-center w-full lg:w-[85%]">
        <div className="flex items-center justify-around text-[#777777] xxs:w-[18rem] lg:gap-8 lg:w-[31rem] rounded-3xl xs:w-[20rem] bg-[#D3E3FF]">
          {buttonItems.map((name, index) =>(
              <button key={index} className={`py-2 lg:px-3 px-2 my-1  xxs:text-[0.7rem] xs:text-sm rounded-3xl font-medium transition ${
                activeButton === name ? 'bg-white text-[#2E5392]' : ''
              }`} onClick={()=>handleActiveButton(name)}>{name}</button>
          )) }
        </div>
      </div>
    </div>
  )
}

export default ItemsButtons
