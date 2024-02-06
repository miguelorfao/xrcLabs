import React, { useRef, useState } from "react";

// import Buttons from "../../components/Buttons";

// import { useNavigate } from "react-router-dom";
import SideNav from "../SideNav";
import TemplateUpload from "./TemplateUpload";
import ImageUpload from "./ImageUpload";
import Header from "../Header";
import "@fontsource/roboto";

function ProjectSettingsSubber() {
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
    <div className="cursor-default font-roboto ">
      <Header>
        <i
          class="fa-solid z-50 text-black cursor-pointer relative top-1 left-3 px-2 py-1 border-2 border-slate-500 rounded-lg fa-bars fa-2x"
          onClick={() => setIsOpen(!isOpen)}
        ></i>

        <div className="h-2 relative -top-8 text-center">
          <h3>Project Settings</h3>
        </div>
      </Header>
      <SideNav show={isOpen} />
      <main
        className={`min-h-screen row dashboard  bg-[#D9D9D9] justify-content-center w-100  ${
          isOpen ? "opacity-20 z-40" : ""
        }`}
      >
        <div className="container top-10 relative ">
          <div class="col">
            {" "}
            <div className="container">
              <div className="row justify-center align-middle">
                <div className="col-12 col-md-3">
                  <label class="">Project Name</label>
                  <br />
                  <input
                    class="pl-2 w-100 px-20 py-2 rounded text-black focus:outline-none"
                    placeholder="chains.sol project"
                  />
                  <br />
                  <label class="">WL Spots</label>
                  <br />
                  <input
                    class="pl-2 w-100 px-20 py-2 rounded text-black focus:outline-none"
                    placeholder="WL Spots"
                  />
                  <br />
                  <label class="">Price</label>
                  <br />
                  <input
                    class="pl-2 w-100 px-20 py-2 rounded text-black focus:outline-none"
                    placeholder="$50"
                  />
                  <br />
                  <label class="">Date</label>
                  <br />
                  <input
                    type="date"
                    class="pl-2 w-100 pr-2 py-2 rounded text-black focus:outline-none"
                    placeholder="chains.sol"
                  />
                  <br />
                </div>
                <div className="col-12 col-md-3">
                  <label>Template</label>
                  <br />
                  <TemplateUpload />
                  <br />
                </div>
                <div className="col-12 col-md-3">
                  <div className="w-100">
                    <label>Image</label>
                    <br />
                    <ImageUpload />
                    <br />
                  </div>
                  <div className="-mt-7 ">
                    <label>Cover Image</label>
                    <br />
                    <div className="mt-1 flex items-center ">
                      <button
                        type="button"
                        onClick={handleCustomButtonClick}
                        className="bg-blue-500 text-black h-16 w-5/6 px-5 py-2 rounded-md w-100"
                        style={{ backgroundColor: myCustomColor }}
                      >
                        Upload Image
                        {/* <FontAwesomeIcon icon={faCloudArrowUp} className='text-4xl relative -top-5 text-gray-500 right-20'/> */}
                      </button>
                      <input
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        className="hidden"
                      />
                    </div>
                    <div className="mt-2">
                      {/* <p className="text-sm text-gray-600">Formats: PNG, JPG</p> */}
                    </div>
                    {/* </div> */}
                    <br />
                  </div>
                </div>
                <div className="col-12 col-md-3 mb-5">
                  <label class="">Discord Link</label>
                  <br />
                  <input
                    class="pl-2 px-20 py-2 rounded text-black focus:outline-none w-100"
                    placeholder="link@discord"
                  />
                  <br />
                  <label class="">Twitter Link</label>
                  <br />
                  <input
                    class="pl-2 px-20 py-2 rounded text-black focus:outline-none w-100"
                    placeholder="twitter@link"
                  />
                  <br />
                  <label class="">Projects Website</label>
                  <br />
                  <input
                    class="pl-2 px-20 py-2 rounded text-black focus:outline-none w-100"
                    placeholder="www.examplewebsite.com"
                  />
                  <br />
                  <label class="">Contact</label>
                  <br />
                  <input
                    class="pl-2 px-20 py-2 rounded text-black focus:outline-none w-100"
                    placeholder="+1 234 654 9872"
                  />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectSettingsSubber;
