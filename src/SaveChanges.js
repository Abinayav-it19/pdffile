import React, { useState } from 'react';

const SaveChanges = ({ onSaveChanges }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveChanges = async () => {
    try {
      // Your save changes logic here
      await onSaveChanges();
      setIsSaved(true); // Set isSaved to true on successful save
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  return (
    <div className="mt-4">
      <button className="btn btn-primary" onClick={handleSaveChanges}>
        Save Changes
      </button>
      {isSaved && <p className="saved-message">file Saved!</p>}
    </div>
  );
};

export default SaveChanges;

