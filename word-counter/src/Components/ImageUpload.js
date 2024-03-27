import React, { useState, useRef } from 'react';
import './ImageUpload.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleContainerClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <div className="file-upload-container" onClick={handleContainerClick}>
        {file ? (
          <p className="file-name">{file.name}</p>
        ) : (
          <>
            <FontAwesomeIcon icon={faCloudUploadAlt} className="file-upload-icon" />
            <p className="file-upload-message">Drag and Drop file here or Choose file</p>
          </>
        )}
        <input
          type="file"
          accept=".xls,.xlsx"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
      </div>
      <div className="file-upload-footer">
        <p className='format'>Supported formats: .xls, .xlsx</p>
      </div>
    </div>
  );
};

export default ImageUpload;
