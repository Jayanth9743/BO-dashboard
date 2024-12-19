import PropTypes from 'prop-types';
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import img from "../assets/porfile.jpeg"

const Navbar = ({toggleSidebar}) => {
  return (
    <div className="fixed top-0 z-40 flex flex-col items-center justify-end w-full lg:flex-row ">

      <div className="flex justify-center text-lg lg:hidden font-semibold h-12 text-white items-center w-full bg-[#426CB4]">
        <BiMenuAltLeft className="absolute z-40 text-3xl cursor-pointer left-1 top-2" onClick={toggleSidebar}/>
        <p>DashBoard</p>
      </div>

      <div className="flex items-center justify-between w-full h-12 bg-white">
        <div className="flex items-center justify-start w-full lg:w-[80%] gap-4 text-lg">
          <IoIosArrowBack className="ml-2 text-xl lg:ml-56 lg:text-2xl "/>
          <p className="font-semibold lg:text-2xl">Profit</p>
        </div>
        <div className=" hidden lg:flex justify-center items-center w-[30%] gap-2">
          <img src={img} alt="" className="object-contain w-8 h-8 rounded-full" />
          <p className="mr-2 font-semibold">Manjunath Naik</p>
        </div>
      </div>

    </div>
  )
}

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar
