import React, { useRef, useState } from "react";

// import Buttons from "../../components/Buttons";

// import { useNavigate } from "react-router-dom";
import SideNav from "../SideNav";
import TemplateUpload from "./TemplateUpload";
import ImageUpload from "./ImageUpload";

function ProjectSettings() {
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
    <div>
      <main>
        <div class="container-fluid">
          <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <SideNav />
            </div>
            <div class="col">
              {" "}
              <div className="">
                <p class="justify-center text-center mt-5">Project Settings</p>

                <div className="flex ">
                  <div className="ml-10 mt-20">
                    <label class="">Project Name</label>
                    <br />
                    <input
                      class="pl-2 px-20 py-2 rounded text-black focus:outline-none"
                      placeholder="chains.sol project"
                    />
                    <br />
                    <label class="">WL Spots</label>
                    <br />
                    <input
                      class="pl-2 px-20 py-2 rounded text-black focus:outline-none"
                      placeholder="WL Spots"
                    />
                    <br />
                    <label class="">Price</label>
                    <br />
                    <input
                      class="pl-2 px-20 py-2 rounded text-black focus:outline-none"
                      placeholder="$50"
                    />
                    <br />
                    <label class="">Date</label>
                    <br />
                    <input
                    type="date"
                      class="pl-2 w-[100%] pr-2 py-2 rounded text-black focus:outline-none"
                      placeholder="chains.sol"
                    />
                    <br />
                  </div>
                  <div className="mt-24 ml-12">
                    <label>Template</label>
                    <br />
                    <TemplateUpload />
                    <br />
                  </div>
                  <div>
                    <div className="mt-24 ">
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
                          className="bg-blue-500 text-black h-16 w-5/6 px-5 py-2 rounded-md"
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
                  <div className="ml- mt-20">
                    <label class="">Discord Link</label>
                    <br />
                    <input
                      class="pl-2 px-20 py-2 rounded text-black focus:outline-none"
                      placeholder="link@discord"
                    />
                    <br />
                    <label class="">Twitter Link</label>
                    <br />
                    <input
                      class="pl-2 px-20 py-2 rounded text-black focus:outline-none"
                      placeholder="twitter@link"
                    />
                    <br />
                    <label class="">Projects Website</label>
                    <br />
                    <input
                      class="pl-2 px-20 py-2 rounded text-black focus:outline-none"
                      placeholder="www.examplewebsite.com"
                    />
                    <br />
                    <label class="">Contact</label>
                    <br />
                    <input
                      class="pl-2 px-20 py-2 rounded text-black focus:outline-none"
                      placeholder="+1 234 654 9872"
                    />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectSettings;