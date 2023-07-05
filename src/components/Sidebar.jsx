import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="fixed top-[12vh] left-0 w-[7rem] h-[80vh] px-4 py-4">
      <div
        className="hidden md:flex flex-col items-center justify-start h-full text-black gap-4
        [&>a]:w-[80%] [&>a]:text-[12px] [&>a]:font-semibold [&>a]:h-[4rem] [&>a]:bg-[#C7F609] [&>a]:bg-opacity-[.13]
      [&>a]:focus:bg-[#C7F609] [&>a]:rounded-xl [&>a]:flex [&>a]:flex-col [&>a]:items-center [&>a]:justify-center
      "
      >
        <Link to="#" className="focus:bg-[#C7F609]">
          <img src="/Profile_logo.svg" alt="profile" 
          className="w-[2rem] h-[2rem]"
          />
          Profile
        </Link>
        <Link to="#" className="focus:bg-[#C7F609]">
        <img src="/Home_logo.svg" alt="Home" 
          className="w-[2rem] h-[2rem]"
          />
          Home
        </Link>
        <Link to="#" className="focus:bg-[#C7F609]">
        <img src="/B_L_logo.svg" alt="B&L" 
          className="w-[2rem] h-[2rem]"
          />
          B/L
        </Link>
        <Link to="#" className="focus:bg-[#C7F609]">
        <img src="/P_L_logo.svg" alt="P&L" 
          className="w-[2rem] h-[2rem]"
          />
          P&L
        </Link>
        <Link to="#" className="focus:bg-[#C7F609]">
        <img src="/trade_logo.svg" alt="Trade" 
          className="w-[2rem] h-[2rem]"
          />
          Trade
        </Link>
        <Link to="#" className="focus:bg-[#C7F609]">
        <img src="/History_logo.svg" alt="History" 
          className="w-[2rem] h-[2rem]"
          />
          History
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
