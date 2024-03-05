import React, { useState } from 'react';
import FileUpload from './FileUpload';
import TextImageAnalysis from './TextImageAnalysis';
import BoundingBoxDisplay from './BoundingBoxDisplay';
import TextImageEditing from './TextImageEditing';
import SaveChanges from './SaveChanges';
import { Document, Page, pdfjs } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const App = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [boundingBoxes, setBoundingBoxes] = useState([]);
  const [numPages, setNumPages] = useState(null);


  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  

  const handleAnalysisComplete = (result) => {
    setBoundingBoxes(result);
  };

  const handleTextChange = (index, newText) => {
    setBoundingBoxes((prevBoxes) => {
      const updatedBoxes = [...prevBoxes];
      updatedBoxes[index].text = newText;
      return updatedBoxes;
    });
  };

  const handleImageChange = (index, newImageSrc) => {
    setBoundingBoxes((prevBoxes) => {
      const updatedBoxes = [...prevBoxes];
      updatedBoxes[index].imageSrc = newImageSrc;
      return updatedBoxes;
    });
  };

  const handleSaveChanges = () => {
    // Implement logic to save changes back into the original file format
    // Example: Convert boundingBoxes to a format suitable for saving
    const savedData = boundingBoxes.map((box) => ({
      text: box.text,
      imageSrc: box.imageSrc,
      // Add other properties if needed
    }));
  
    // Use savedData to save changes (e.g., send to server, save to a file, etc.)
    console.log('Changes saved:', savedData);
  };
  return (
    <div className="container mt-5">
      <FileUpload onFileUpload={handleFileUpload} />
      <TextImageAnalysis file={uploadedFile} onAnalysisComplete={handleAnalysisComplete} />
      <BoundingBoxDisplay boundingBoxes={boundingBoxes} />
      <TextImageEditing boundingBoxes={boundingBoxes} onTextChange={handleTextChange} onImageChange={handleImageChange} />
      <SaveChanges onSaveChanges={handleSaveChanges} />
      <Document file={uploadedFile} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
};

export default App;
