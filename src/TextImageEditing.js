import React from 'react';

const TextImageEditing = ({ boundingBoxes, onTextChange, onImageChange }) => {
  const handleTextChange = (index, newText) => {
    onTextChange(index, newText);
  };

  const handleImageChange = (index, newImageSrc) => {
    onImageChange(index, newImageSrc);
  };

  return (
    <div>
      {boundingBoxes.map((box, index) => (
        <div key={index} className="mb-3">
          {box.type === 'text' && (
            <textarea
              className="form-control"
              rows="3"
              placeholder="Edit text..."
              onChange={(e) => handleTextChange(index, e.target.value)}
            />
          )}
          {box.type === 'image' && (
            <input
              type="text"
              className="form-control"
              placeholder="Paste new image URL..."
              onChange={(e) => handleImageChange(index, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TextImageEditing;
