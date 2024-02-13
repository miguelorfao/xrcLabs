import React, { useState } from "react";
import SideNav from "../SideNav";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Camera from '../../images/Camera.png'

function ProjectChooseSettings() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const onClickHandleProjectSettings = () => {
    navigate("/ProjectSettings");
  };
  return (
    <>
      <div className="cursor-default font-roboto  overflow-x-hidden overflow-y-scroll scrollbar-thumb-blue scrollbar-track-blue">
        <Header>
          {/* <i
          class="fa-solid z-50 lg:hidden block text-black cursor-pointer relative top-1 left-3 px-2 py-1 border-2 border-slate-500 rounded-lg fa-bars fa-2x"
          onClick={() => setIsOpen(!isOpen)}
        ></i> */}
          <h3 className="relative left-20 top-2">zrcLabs</h3>
        </Header>
        <SideNav show={isOpen} />

        <div
          className={`min-h-screen overflow-x-hidden  left-[21%] w-[78.9%] pt-7 bg-[#E5E5E5] top-14 relative justify-content-center pb-40  ${
            isOpen ? "opacity-70 z-20 bg-[#E5E5E5]" : ""
          }`}
        >
          <h3 className="h-  relative -left-7 text-center font-semibold">
            Project Settings{" "}
            <span id="userName" className="text-uppercase"></span>
          </h3>
          <div className="relative top- space-x-4 left-12  flex">
            <div className="relative top- space-x-4 left-12  flex">
              <div className="justify-center text-center">
                <p>Logo</p>
                <div className="w-20 h-36 bg-[#FAFAFB]">
                  <img src={Camera}/>
                </div>
              </div>
            </div>
            <div className="relative top- space-x-4 left-12  flex"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectChooseSettings;
