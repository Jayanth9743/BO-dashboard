import { useState } from 'react';
import data from "../../resources/DropDownData.json";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";


const YearSelector = () => {
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const toggleYearDropdown = () => {
    setIsYearDropdownOpen(!isYearDropdownOpen);
  };

  const toggleMonthDropdown = () => {
    setIsMonthDropdownOpen(!isMonthDropdownOpen);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsYearDropdownOpen(false);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setIsMonthDropdownOpen(false);
  };

  return (
    <div className="flex items-center justify-center w-full mt-8">
      <div className="hidden w-48 lg:block"></div>
      <div className="flex flex-col items-center justify-center w-full lg:w-[85%]">
        <div className="flex flex-col items-center justify-center w-full gap-6 lg:gap-12 lg:flex-row">
          <div className="flex flex-col items-start justify-center w-[85%] lg:w-[20rem] gap-2">
            <label htmlFor="drop-years" className="font-semibold">
              Choose Year
            </label>
            <div className="relative w-full">
              <div
                className="w-full p-2 cursor-pointer lg:p-1 bg-white border border-[#D5D7DA] rounded-md"
                onClick={toggleYearDropdown}
              >
                {selectedYear || "Year"}
                <span className="absolute text-[#717680] text-2xl -translate-y-1/2 pointer-events-none right-2 top-1/2">
                    {isYearDropdownOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown /> }
                </span>
              </div>
              {isYearDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg" style={{ marginTop: '0.5rem' }}>
                  {data.year.map((year, index) => (
                    <div
                      key={index}
                      className="p-2 cursor-pointer hover:bg-[#426CB4] hover:text-white"
                      onClick={() => handleYearSelect(year)}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center w-[85%] lg:w-[20rem] gap-2">
            <label htmlFor="drop-months" className="font-semibold">
              Choose Month
            </label>
            <div className="relative w-full">
              <div
                className="w-full p-2 cursor-pointer lg:p-1 bg-white border border-[#D5D7DA] rounded-md outline-none"
                onClick={toggleMonthDropdown}
              >
                {selectedMonth || "Month"}
                <span className="absolute text-[#717680] text-2xl -translate-y-1/2 pointer-events-none right-2 top-1/2">
                    {isMonthDropdownOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown /> }
                </span>
              </div>
              {isMonthDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white rounded-md shadow-lg" style={{ marginTop: '0.5rem' }}>
                  {data.months.map((month, index) => (
                    <div
                      key={index}
                      className="p-2 cursor-pointer hover:bg-[#426CB4] hover:text-white"
                      onClick={() => handleMonthSelect(month)}
                    >
                      {month}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearSelector;