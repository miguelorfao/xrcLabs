import React, { useState } from "react";
import SideNav from "../SideNav";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Camera from "../../images/Camera.png";
import FileInput from "./FileInput_Logo";
import FileInput_Cover from "./FileInput_Cover";

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
            <div className="h-[98%] w-[48%] left-[-1.3%]  top-1 rounded-sm bg-white relative mb-3 whitespace-nowrap p-10">
              <div className="flex space-x-6">
                <div className="justify-center text-center relative right-3">
                  <p className="relative top-9">Logo</p>
                  <img
                    className="w-8 relative left-14 top-20 z-50"
                    src={Camera}
                  />
                  <FileInput />
                  {/* </input> */}
                </div>
                <div className="justify-center text-center relative right-2">
                  <p className="relative top-9">Cover Photo</p>
                  <img
                    className="w-8 relative left-32 top-20 z-50"
                    src={Camera}
                  />
                  <FileInput_Cover />
                  {/* </input> */}
                </div>
              </div>
              <div className="mt-12 relative right-3">
                <div className="flex">
                  <div>
                    <label className="text-black text-lg">Project Name</label>
                    <br />
                    <input
                      className="focus:outline-none placeholder:text-gray-600 bg-gray-100 px-3 rounded-lg py-2.5 mt-2.5"
                      type="text"
                      placeholder="My Project"
                    />
                  </div>
                  <div className="ml-6">
                    <label className="text-black text-lg">Mint Date</label>
                    <br />
                    <input
                      className="pl-8 focus:outline-none placeholder:text-gray-600 bg-gray-100 px-[30%] rounded-lg py-2.5 mt-2.5"
                      type="date"
                      // placeholder="twitter.com/myproject"
                    />
                  </div>
                </div>
                <div className="flex mt-8">
                  <div>
                    <label className="text-black text-lg">Mint Price</label>
                    <br />
                    <input
                      className="focus:outline-none placeholder:text-gray-600 bg-gray-100 px-3 rounded-lg py-2.5 mt-2.5"
                      type="text"
                      placeholder="0.5"
                    />
                  </div>
                  <div className="ml-6">
                    <label className="text-black text-lg">Chain</label>
                    <br />
                    <input
                      className="focus:outline-none placeholder:text-gray-600 bg-gray-100 px-[11%] rounded-lg py-2.5 mt-2.5"
                      type="text"
                      placeholder="Solana"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-black text-lg">Template</label>
                  <br />
                  <textarea
                    className="focus:outline-none h-60 w-[104%] placeholder:text-gray-600 bg-gray-100 px-8 rounded-lg py-2.5 mt-2.5 pt-3"
                    type="text"
                    placeholder="This will accept text, images & video format"
                  />
                </div>
              </div>

              <button
                data-bs-toggle="modal"
                data-bs-target="#popup"
                className="px-11 py-2 relative left-[68.5%] mt-14 text-white rounded-lg bg-[#605BFF]"
              >
                Save Settings
              </button>
              {/* <button onClick={openPopup} className="px-7 py-2 relative left-[33%] mt-14 text-white rounded-lg bg-[#605BFF]">Request Whitelist</button> */}
            </div>
            <div className="relative top- space-x-4 left-12  flex"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectChooseSettings;
