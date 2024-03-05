import React from 'react';

const BoundingBoxDisplay = ({ boundingBoxes, fileType }) => {
  return (
    <div className="position-relative">
      {fileType === 'pdf' && <p className="file-type-info">Only PDF files are allowed.</p>}
      {fileType === 'ppt' && <p className="file-type-info">Only PPT files are allowed.</p>}
      
      {boundingBoxes.map((box, index) => {
        const { x, y, width, height } = box.coordinates;
        return (
          <div key={index} className="bounding-box" style={{ position: 'absolute', left: x, top: y, width, height }}>
            {/* You can customize the appearance of the bounding box if needed */}
          </div>
        );
      })}
    </div>
  );
};

export default BoundingBoxDisplay;
