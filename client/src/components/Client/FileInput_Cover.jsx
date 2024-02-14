import { useState } from 'react';

function FileInput_Cover() {
  const [fileName, setFileName] = useState('Select a file');

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } 
  };

  return (
    <div className="relative w-72 rounded-full h-36 bg-[#FAFAFB]  shadow-sm">
      <input
        type="file"
        id="myFile"
        name="myFile"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleChange}
      />
      <label htmlFor="myFile" className="text-gray-700 cursor-pointer">
        
      </label>
    </div>
  );
}

export default FileInput_Cover;
