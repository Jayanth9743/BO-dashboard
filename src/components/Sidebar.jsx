import PropTypes from 'prop-types';
import { LuLayoutDashboard } from "react-icons/lu";
import { TbBuildingWarehouse } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdOutlinePendingActions } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import { MdPeopleOutline } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { TbSwitch2 } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { TbLogout } from "react-icons/tb";

const Sidebar = ({ isOpen, sidebarRef }) => {
  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 z-40 flex flex-col items-center justify-between w-48 h-[100%] bg-black transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 lg:translate-x-0`}
    >
      <div className="flex justify-center items-center mt-4 text-3xl h-8 font-bold w-full text-[#2E5392]">
        <p className="mr-2">Logoipsum</p>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-7">
        <div className="flex items-center justify-start gap-2 w-[90%] text-md text-white">
          <LuLayoutDashboard className="text-2xl" />
          <p>Dashboard</p>
        </div>
        <div className="flex items-center justify-start gap-2 w-[90%] text-md text-white">
          <TbBuildingWarehouse className="text-2xl" />
          <p>Stock Management</p>
        </div>
        <div className="flex items-center justify-start gap-2 w-[90%] text-md text-white">
          <GoPeople className="text-2xl" />
          <p>Customer List</p>
        </div>
        <div className="flex items-center justify-start gap-2 w-[90%] text-md text-white">
          <HiOutlineDocumentReport className="text-2xl" />
          <p>Order Report</p>
        </div>
        <div className="flex items-center justify-start gap-2 w-[90%] text-md text-white">
          <MdOutlinePendingActions className="text-2xl" />
          <p>Pending Orders</p>
        </div>
        <div className="flex items-center justify-start gap-2 w-[90%] text-md text-white">
          <VscGraphLine className="text-2xl" />
          <p>P&L Report</p>
        </div>
        <div className="flex items-center justify-start gap-2 w-[90%] text-md text-white">
          <MdPeopleOutline className="text-2xl" />
          <p>Employee List</p>
        </div>
        <div className="flex items-center justify-start gap-2 w-[90%] text-md text-white">
          <TbBrandGoogleAnalytics className="text-2xl" />
          <p>Weekly Balance Analysis</p>
        </div>
        <div className="flex items-center justify-start gap-2 w-[90%] text-md text-white">
          <RiMoneyRupeeCircleLine className="text-2xl" />
          <p>Daily Price Record</p>
        </div>
        <div className="flex items-center justify-start gap-2 w-[90%] text-md text-white">
          <TbSwitch2 className="text-2xl" />
          <p>Switch Account</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-4 mb-4">
        <div className="flex items-center justify-start gap-2 w-[90%] text-md text-white">
          <CiSettings className="text-2xl" />
          <p>Settings</p>
        </div>
        <div className="flex items-center justify-start gap-2 w-[90%] text-md text-white">
          <TbLogout className="text-2xl" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  sidebarRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired,
};

export default Sidebar;