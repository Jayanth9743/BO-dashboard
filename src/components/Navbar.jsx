import PropTypes from 'prop-types';
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import img from "../assets/porfile.jpeg";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState } from 'react';

const Navbar = ({ toggleSidebar }) => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="fixed top-0 z-40 flex flex-col items-center justify-end w-full lg:flex-row ">

      <div className="flex justify-center text-lg lg:hidden font-semibold h-12 text-white items-center w-full bg-[#426CB4]">
        <BiMenuAltLeft className="absolute z-40 text-3xl cursor-pointer left-1 top-2" onClick={toggleSidebar} />
        <p>DashBoard</p>
      </div>

      <div className="flex items-center justify-between w-full h-12 bg-white lg:shadow-md">
        <div className="flex items-center justify-start w-full lg:w-[80%] gap-4 text-lg">
          <IoIosArrowBack className="ml-2 text-xl lg:ml-56 lg:text-2xl" />
          <p className="font-semibold lg:text-2xl">Profit</p>
        </div>
        <div className="hidden lg:flex justify-end mr-6 items-center w-[30%] gap-2">
          <img src={img} alt="" className="object-contain w-8 h-8 rounded-full" />
          <div onClick={handleDropDown} className='relative flex items-center justify-center gap-1 cursor-pointer'>
            <p className="mr-2 font-semibold">Manjunath Naik</p>
            {dropDown ? <MdOutlineKeyboardArrowUp className='text-xl' /> : <MdOutlineKeyboardArrowDown className='text-xl' />}
            {dropDown && (
              <div className='absolute w-[8rem] mt-2 bg-white border border-gray-200 rounded-md shadow-lg top-full'>
                <p className='p-2 cursor-pointer hover:bg-gray-100'>Profile Settings</p>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;