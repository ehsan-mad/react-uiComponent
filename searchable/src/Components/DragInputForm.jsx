import React, { useState } from "react";

const DragInputForm = () => {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const uploadFile = event.dataTransfer.files[0];
    if (uploadFile) {
      setFile(uploadFile);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-96 mx-auto">
      DragInputForm
      <label
       
        className={`w-full border-2 border-dashed border-gray-400 rounded-lg p-8 text-center cursor-pointer transition-all 
        ${dragging ? "border-rose-500 bg-amber-300" : "border-gray-300"}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDragging(false);
        }}
        onDrop={handleDrop}
      >
        <input
          type="file"
          name=""
          id=" "
          className="hidden"
          onChange={handleFileSelect}
        />
        <p className="text-gray-600">
          Drag & drop your file or{" "}
          <span className="text-blue-500">Click to Update</span>
        </p>
      </label>
      {file && (<p className="mt-4 text-green-600">selected File: {file.name}</p>)}
    </div>
  );
};

export default DragInputForm;
