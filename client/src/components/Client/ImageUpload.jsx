import { useState, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const ImageUpload = () => {
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
      <div className="mt-1 flex items-center ">
        <button
          type="button"
          onClick={handleCustomButtonClick}
          className="bg-blue-500 text-black h-28 w-5/6 px-5 py-2 rounded-md w-100"
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
    </div>
  );
};

export default ImageUpload;
