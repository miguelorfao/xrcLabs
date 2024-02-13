import React, { useState } from "react";

// import { useNavigate } from "react-router-dom";
import SideNav from "../SideNav";
import Header from "../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "../../images/Calendar.png";

import {
  // fa-solid,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function CollabSheet() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="cursor-default font-roboto  overflow-x-hidden overflow-y-scroll scrollbar-thumb-blue scrollbar-track-blue">
      <Header>
        {/* <i
          class="fa-solid z-50 lg:hidden block text-black cursor-pointer relative top-1 left-3 px-2 py-1 border-2 border-slate-500 rounded-lg fa-bars fa-2x"
          onClick={() => setIsOpen(!isOpen)}
        ></i> */}
        <h3 className="relative left-20 top-2">zrcLabs</h3>

        <div className="h-2 relative left-28 -top-8 text-center">
          
        </div>
      </Header>
      <SideNav />
      <div
        className={`min-h-screen overflow-x-hidden  left-[21%] w-[78.9%] pt-7 bg-[#E5E5E5] top-14 relative justify-content-center pb-40  ${
          isOpen ? "opacity-70 z-20 bg-[#E5E5E5]" : ""
        }`}
      >
        <h3 className="h-  relative -left-7 text-center font-semibold">
          Entry Sheet <span id="userName" className="text-uppercase"></span>
        </h3>
        <button className="h-  relative left-[42%] p-2 px-4 bg-[#605BFF] text-white rounded-xl">Download</button>
        <div className="relative top-6 left-12 space-x-20 flex">
          <div className="flex space-x-4">
            <input type="checkbox" className="h-5 w-8"/>
            <p>Date</p>
            <FontAwesomeIcon className="cursor-pointer" icon={faCaretDown} />
          </div>
          <div className="flex space-x-4">
            {/* <input type="checkbox" className="h-5 w-8"/> */}
            <p>Name</p>
            <FontAwesomeIcon className="cursor-pointer" icon={faCaretDown} />
          </div>
          <div className="flex space-x-4">
            {/* <input type="checkbox" className="h-5 w-8"/> */}
            <p>Spots</p>
            <FontAwesomeIcon className="cursor-pointer" icon={faCaretDown} />
          </div>
          <div className="flex space-x-4">
            {/* <input type="checkbox" className="h-5 w-8"/> */}
            <p>Entries</p>
            <FontAwesomeIcon className="cursor-pointer" icon={faCaretDown} />
          </div>
          <div className="flex space-x-4">
            {/* <input type="checkbox" className="h-5 w-8"/> */}
            <p>Platform</p>
            <FontAwesomeIcon className="cursor-pointer" icon={faCaretDown} />
          </div>
          <div className="flex space-x-4">
            {/* <input type="checkbox" className="h-5 w-8"/> */}
            <p>Status</p>
            <FontAwesomeIcon className="cursor-pointer" icon={faCaretDown} />
          </div>
        </div>


        <div className="relative top-6 pl-4 pt-4 bg-white p-2.5 left-4 h-[11.5vh] rounded-xl space-x-20 flex">
          <div className="flex space-x-4">
          <img className="h-5 w-" src={Calendar}/>
            <p>10 Dec, 2020</p>
          
          </div>
          <div className="flex space-x-4">
            {/* <input type="checkbox" className="h-5 w-8"/> */}
            <p>MadLabs</p>
          
          </div>
          <div className="flex space-x-4">
            {/* <input type="checkbox" className="h-5 w-8"/> */}
            <p>10</p>
          
          </div>
          <div className="flex space-x-4 pl-12">
            {/* <input type="checkbox" className="h-5 w-8"/> */}
            <p>10</p>
          
          </div>
          <div className="flex space-x-4 pl-16">
            {/* <input type="checkbox" className="h-5 w-8"/> */}
            <p>Atlas</p>
          
          </div>
          <div className="flex space-x-4 pl-5">
            {/* <input type="checkbox" className="h-5 w-8"/> */}
            <p className="bg-[#EBF5ED] text-[#3A974C] px-5 py-2.5 h-11 relative -top-3 rounded-3xl">Complete</p>
          
          </div>
        </div>

        
        </div>
    </div>
  );
}

export default CollabSheet;
