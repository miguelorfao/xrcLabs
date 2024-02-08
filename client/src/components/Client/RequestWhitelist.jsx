import React, { useState } from "react";

import Buttons from "../Buttons";

// import { useNavigate } from "react-router-dom";
import SideNav from "../SideNav";
import Header from "../Header";

function ProjectWl() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
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
          Dashboard <span id="userName" className="text-uppercase"></span>
        </h3>
        <div className="relative top- space-x-4 left-12  flex">
          <div className=" w-72 text-center  justify-content-center mb-3">
            <Collab />
          </div>
          <div className=" w-72 text-center  justify-content-center mb-3">
            <Entries />
          </div>
          <div className=" w-72 text-center  justify-content-center mb-3">
            <DiscordUsers />
          </div>
        </div>
        <div className="h-[80%] w-[83%] left-[5.1%] top-10 bg-white relative mb-3">
          <div className="pl-1">
            <h4 className="font-semibold text-base text-center relative top-5">
              User Growth
            </h4>
            <h4 className="font-semibold text-2xl float-right relative right-9 -top-5">
              ...
            </h4>
            <img className="-top-5" src={Dashboardchart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectWl;
