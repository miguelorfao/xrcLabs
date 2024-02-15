import React, { useRef, useState } from "react";

// import Buttons from "../../components/Buttons";

// import { useNavigate } from "react-router-dom";
import SideNav from "../SideNav";
import TemplateUpload from "./TemplateUpload";
import ImageUpload from "./ImageUpload";
import Header from "../Header";
import "@fontsource/roboto";

function ProjectSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const myCustomColor = "#FAFAFA";

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Check if the selected file is a PNG or JPG
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      setSelectedFile(file);
    } else {
      // Reset the selected file if it's not a PNG or JPG
      setSelectedFile(null);
      alert("Please select a valid PNG or JPG file.");
    }
  };

  const handleCustomButtonClick = () => {
    // Trigger the hidden file input
    fileInputRef.current.click();
  };
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
        <h3 className="h-  relative -left-7 text-center font-semibold">
          Schedule Call{" "}
          <span id="userName" className="text-uppercase"></span>
        </h3>
        <p className="relative -left-7 text-center">with our team</p>
      </div>
      <div></div>
    </div>
  );
}

export default ProjectSettings;
