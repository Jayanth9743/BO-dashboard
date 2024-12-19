import data from "../../resources/DailyPrice.json"

const PricePreviews = () => {
  return (
    <div className="flex items-center justify-center w-full mt-16 ">
        <div className='hidden w-48 lg:block'></div>

        <div className="flex flex-col items-center justify-center w-full ml-2 lg:w-[85%] overflow-x-hidden">

            <div className="flex items-center justify-between w-full ml-4 mr-4 border rounded-xl border-[#C3C3C3] overflow-x-auto ">

                <div className="flex flex-col flex-shrink-0 justify-center items-center  h-[12rem] text-[#555555] bg-[#D3E3FF] w-[8rem]">
                    <div className="flex items-center justify-around w-full h-[40%]">
                        <p>Date</p>
                    </div>
                    <div className="flex flex-col items-center justify-around flex-shrink-0 w-full h-1/2 ">
                        <p>BOARD RATE</p>
                        <p>BILLING RATE</p>
                    </div>
                </div>

                <div className="flex justify-around items-center -z-10 flex-shrink-0 ml-4 mr-4 gap-4 h-[12rem]">
                    {data.days.map((info)=>(
                        <div key={info.id} className="flex flex-col items-center justify-center gap-4 w-[4rem] h-full">
                            <div className="flex font-semibold text-lg items-center flex-col rounded-lg justify-around text-white w-full h-[40%] bg-[#426CB4]">
                                <p>{info.day}</p>
                                <p>{info.date}</p>
                            </div>
                            <div className="flex flex-col font-medium items-center border border-[#C9C9C9] rounded-lg justify-around w-full h-[40%] ">
                                <p>{info.broiler.boardRate}</p>
                                <p>{info.broiler.billingRate}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col font-semibold justify-center flex-shrink-0 items-center h-[12rem] text-[#555555] bg-[#D3E3FF] w-[8rem]">
                    <div className="flex items-center justify-around w-full h-[40%]">
                        <p>AVERAGE</p>
                    </div>
                    <div className="flex flex-col items-center justify-around w-full font-semibold h-1/2 ">
                        <p>100</p>
                        <p>100</p>
                    </div>
                </div>

             </div>
        </div>

    </div>
  )
}

export default PricePreviews
