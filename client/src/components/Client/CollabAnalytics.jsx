import React, { useState } from "react";
import "@fontsource/roboto";
import Collab from "../Collab";
import Entries from "../Entries";
import DiscordUsers from "../DiscordUsers";
import Rocket from "../../images/rocket.png"



// import Buttons from "../../components/Buttons";
// import { useNavigate } from "react-router-dom";
import SideNav from "../SideNav";
import Header from "../Header";

function CollabStat() {
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
        className={`min-h-screen overflow-x-hidden  left-[21%] w-[78.9%] pt-7 bg-[#E5E5E5] top-14 relative justify-content-center pb-40  ${
          isOpen ? "opacity-70 z-20 bg-[#E5E5E5]" : ""
        }`}
      >
        <h4 className="h- -top-4 mt-10 text-xl relative -left-7 text-center font-semibold">
          Collaboration Analytics  <span id="userName" className="text-uppercase"></span>
        </h4>
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
        
        <div className="relative top-16 space-x-4 left-12  flex">
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
        <div className="h-60 justify-center relative top-40 left-[37%]">
          <img className="w-40" src={Rocket}/>
        </div>
        </div>
    </div>
  );
}

export default CollabStat;
