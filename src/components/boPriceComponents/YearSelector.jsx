import data from "../../resources/DropDownData.json";
//the data will change when the api is given
const YearSelector = () => {
    console.log(data)
  return (
    <div className="flex items-center justify-center w-full mt-8">

        <div className='hidden w-48 lg:block'></div>

        <div className="flex flex-col items-center justify-center w-full lg:w-[85%]">
            <div className="flex flex-col items-center justify-center w-full gap-6 lg:gap-12 lg:flex-row">
                <div className="flex flex-col items-start justify-center w-[85%] lg:w-[20rem] gap-2">
                    <label htmlFor="drop-years" className="font-semibold">Choose Year</label>
                    <select name="drop-years" id="drop-years" className="w-full cursor-pointer p-2 lg:p-1 bg-white border border-[#D5D7DA] rounded-md outline-none">
                        <option value="" disabled selected>year</option>
                        {data.year.map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col items-start justify-center w-[85%] lg:w-[20rem] gap-2">
                    <label htmlFor="drop-months" className="font-semibold" >Choose Month</label>
                    <select name="drop-months" id="drop-months" className="w-full p-2 cursor-pointer lg:p-1 bg-white border border-[#D5D7DA] rounded-md outline-none">
                        <option value="" disabled selected>Month</option>
                        {data.months.map((month, index) => (
                            <option key={index} value={month}>{month}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default YearSelector
