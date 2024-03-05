import React from 'react';

const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileUpload(file);
  };

  return (
    <div className="mb-3">
      <label htmlFor="fileInput" className="form-label">Upload PDF or PPT file:</label>
      <input type="file" className="form-control" id="fileInput" accept=".pdf, .ppt" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
