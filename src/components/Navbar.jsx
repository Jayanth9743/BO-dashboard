
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">

      <div className="flex justify-center relative text-lg font-semibold h-12 text-white items-center w-full bg-[#426CB4]">
        <BiMenuAltLeft className="absolute text-3xl left-1 top-2 "/>
        <p>DashBoard</p>
      </div>

      <div className="flex items-center justify-between w-full h-12">
        <div className="flex items-center justify-start w-full gap-4 text-lg">
          <IoIosArrowBack className="ml-2 text-xl"/>
          <p className="font-semibold">Collection Report</p>
        </div>
      </div>

    </div>
  )
}

export default Navbar
