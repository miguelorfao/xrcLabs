import React, { useState } from "react";

import Buttons from "../Buttons";

// import { useNavigate } from "react-router-dom";
import SideNav from "../SideNav";
import Header from "../Header";

function ProjectWl() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="cursor-default font-roboto  overflow-x-hidden overflow-y-scroll scrollbar-thumb-blue scrollbar-track-blue">
      <Header>
        {/* <i
          class="fa-solid z-50 lg:hidden block text-black cursor-pointer relative top-1 left-3 px-2 py-1 border-2 border-slate-500 rounded-lg fa-bars fa-2x"
          onClick={() => setIsOpen(!isOpen)}
        ></i> */}
        <h3 className="relative left-20 top-2">zrcLabs</h3>

        <div className="h-2 relative left-28 -top-8 text-center"></div>
      </Header>
      <SideNav show={isOpen} />
      <div
        className={`min-h-screen overflow-x-hidden  left-[22%] w-[78.9%] pt-7 bg-[#E5E5E5] top-14 relative justify-content-center pb-40  ${
          isOpen ? "opacity-70 z-20 bg-[#E5E5E5]" : ""
        }`}
      >
        <h3 className="h-  relative -left-7 text-center font-semibold">
          Request Whitelist{" "}
          <span id="userName" className="text-uppercase"></span>
        </h3>
        <p className="relative -left-7 text-center">Fill out details</p>

        <div className="h-96 w-[60%] left-[17%] top-1 rounded-sm bg-white relative mb-3 whitespace-nowrap p-11">
          <div className="flex">
            <div>
            <label className="text-black text-lg">Project Name</label>
            <br/>
            <input className="focus:outline-none placeholder:text-gray-600 bg-gray-100 px-8 rounded-lg py-2.5 mt-2.5" type="text" placeholder="Name" />
            </div>
            <div className="ml-10">
            <label className="text-black text-lg">Twitter</label>
            <br/>
            <input className="focus:outline-none placeholder:text-gray-600 bg-gray-100 px-8 rounded-lg py-2.5 mt-2.5" type="text" placeholder="twitter.com/myproject" />
            </div>
          </div>
          <div className="flex mt-8">
           <div>
           <label className="text-black text-lg">Website</label>
            <br/>
            <input className="focus:outline-none placeholder:text-gray-600 bg-gray-100 px-8 rounded-lg py-2.5 mt-2.5" type="text" placeholder="myproject.com" />
           </div>
           <div  className="ml-10">
           <label className="text-black text-lg">Discord</label>
            <br/>
            <input className="focus:outline-none placeholder:text-gray-600 bg-gray-100 px-8 rounded-lg py-2.5 mt-2.5" type="text" placeholder="discord.com" />
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectWl;
