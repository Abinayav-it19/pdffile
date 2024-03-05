// TextImageEditing.js

import React from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const TextImageEditing = ({ boundingBoxes, onTextChange, onImageChange, onBoundingBoxResize, onBoundingBoxDrag }) => {
  return (
    <div>
      {boundingBoxes.map((box, index) => (
        <ResizableBox
          key={index}
          width={box.width}
          height={box.height}
          onResize={(e, data) => onBoundingBoxResize(index, data)}
          onDrag={(e, data) => onBoundingBoxDrag(index, data)}
          draggableOpts={{ enableUserSelectHack: false }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: '1px solid #000',
                overflow: 'hidden',
              }}
            >
              {/* Your text editor or other content editing components go here */}
              <textarea
                value={box.text}
                onChange={(e) => onTextChange(index, e.target.value)}
                style={{ width: '100%', height: '100%', resize: 'none', border: 'none', outline: 'none' }}
              />
            </div>
            <label style={{ display: 'block', marginTop: '5px' }}>
              Edit Image:
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    onImageChange(index, event.target.result);
                  };
                  reader.readAsDataURL(file);
                }}
              />
            </label>
          </div>
        </ResizableBox>
      ))}
    </div>
  );
};

export default TextImageEditing;
