import React, { useState } from "react";
import SideNav from "../SideNav";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function ProjectChooseSettings() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const onClickHandleProjectSettings = () => {
    navigate("/ProjectSettings");
  };
  return (
    <>
      <div className="cursor-default font-roboto ">
        <Header>
          <i
            class="fa-solid z-50 text-black cursor-pointer relative top-1 left-3 px-2 py-1 border-2 border-slate-500 rounded-lg fa-bars fa-2x"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
           <div className="h-2 relative -top-8 text-center">
          <h3>
          Project Settings
          </h3>
        </div>
        </Header>
        <SideNav show={isOpen} />

        <main
          className={`min-h-screen row dashboard  bg-[#D9D9D9] justify-content-center w-100  ${
            isOpen ? "opacity-20 z-40" : ""
          }`}
        >
          <div className="container -top-10 relative ">
            <div class="col">
              {" "}
              <div className="container ">
                <div className="border-[#9D9797] my-4 space-y-14">
                 
                  <p class="justify-center text-center my-2">
                    Here you can edit your project details for the following
                    collaboration platforms
                  </p>

                  <div className="text-white space-x-36 text-center">
                   <Link to='./ProjectSettings'>
                   <button className="px-20 py-2 text-white bg-[#9D9797]">Atlas</button>
                   </Link>

                   <Link to='./ProjectSettingsSubber'>
                    <button className="px-20 py-2 text-white bg-[#9D9797]">Subber</button>
                   </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ProjectChooseSettings;
