import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      // Validate file type (optional)
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (validTypes.includes(selectedImage.type)) {
        // Set the selected image
        setImage(URL.createObjectURL(selectedImage));
      } else {
        alert('Please select a valid image file (JPEG, PNG, or GIF)');
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />}
    </div>
  );
};

export default ImageUpload;
